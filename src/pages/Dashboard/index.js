import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useAuth } from "../../hooks/auth";

const Dashboard = () => {
  const { signOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TouchableOpacity onPress={signOut}>
        <Text>Deslogar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
