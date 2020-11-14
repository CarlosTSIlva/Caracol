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
      const [token, status] = await AsyncStorage.multiGet([
        "@Caracol:token",
        "@Caracol:status",
      ]);
      if (token[1] && status[1]) {
        setData({
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

    await AsyncStorage.multiSet([
      ["@Caracol:token", token],
      ["@Caracol:status", JSON.stringify(status)],
    ]);

    setData({ token, status, username });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(["@Caracol:token", "@Caracol:status"]);

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
