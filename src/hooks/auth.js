import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../services/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const [token, status, username] = await AsyncStorage.multiGet([
        "@Caracol:token",
        "@Caracol:status",
        "@Caracol:name",
      ]);

      if (token[1] && status[1]) {
        setData({
          username: username[1],
          token: token[1],
          status: JSON.parse(status[1]),
        });
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  const singIn = useCallback(async ({ username, password, application }) => {
    const response = await api.post("/authenticate", {
      application,
      password,
      username,
    });

    const { token, status } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    await AsyncStorage.multiSet([
      ["@Caracol:token", token],
      ["@Caracol:name", username],
      ["@Caracol:status", JSON.stringify(status)],
    ]);

    setData({ token, status, username });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
      "@Caracol:token",
      "@Caracol:status",
      "@Caracol:name",
    ]);

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token: data.token,
        username: data.username,
        singIn,
        signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("UseAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
