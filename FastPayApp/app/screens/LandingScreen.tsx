import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function LandingScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FastPayCash 🎉</Text>
      <Text style={styles.subtitle}>You are logged in successfully.</Text>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.replace("Home")}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 30,
  },
  logoutButton: {
    backgroundColor: "#ff4e50",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  logoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
