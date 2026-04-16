import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Home() {
  const { name } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome 👋</Text>
      <Text style={styles.name}>{name}</Text>

      {/* 🔥 DASHBOARD 3 CARD */}
      <View style={styles.dashboard}>
        <View style={styles.cardSmall}>
          <Text style={styles.cardTitle}>📊 Posts</Text>
          <Text style={styles.cardValue}>24</Text>
        </View>

        <View style={styles.cardSmall}>
          <Text style={styles.cardTitle}>🔥 Activity</Text>
          <Text style={styles.cardValue}>12</Text>
        </View>

        <View style={styles.cardSmall}>
          <Text style={styles.cardTitle}>💬 Messages</Text>
          <Text style={styles.cardValue}>5</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/login")}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#071826",
    justifyContent:"center",
    alignItems:"center"
  },

  title: { color:"#94A3B8" },

  name: {
    color:"#fff",
    fontSize:24,
    fontWeight:"bold"
  },

  // 🔥 DASHBOARD BARU
  dashboard: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 20
  },

  cardSmall: {
    backgroundColor: "#0F2A44",
    padding: 10,
    borderRadius: 15,
    width: "30%",
    alignItems: "center"
  },

  cardTitle: { color: "#94A3B8" },

  cardValue: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },

  button: {
    backgroundColor:"#2563EB",
    padding:15,
    borderRadius:12,
    marginTop:20
  },

  buttonText: { color:"#fff" }
});