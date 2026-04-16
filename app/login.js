import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Platform, ScrollView, StyleSheet
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router"; // ✅ WAJIB

export default function LoginScreen() {
  const router = useRouter();
  const user = useLocalSearchParams(); // 🔥 ganti route.params

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      return setError("Isi email & password dulu");
    }

    if (!user.email) {
      return setError("Silakan register dulu");
    }

    if (email !== user.email || password !== user.password) {
      return setError("Email atau password salah");
    }

    setError("");

    // 🔥 ganti navigation.navigate
    router.push({
      pathname: "/home",
      params: { name: user.name }
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        
        <View style={styles.header}>
          <Text style={styles.icon}>🔒</Text>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>Login dulu ya 👀</Text>
        </View>

        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login 🚀</Text>
          </TouchableOpacity>

          {/* 🔥 ganti ini juga */}
          <Text style={styles.link} onPress={() => router.push("/register")}>
            Belum punya akun? Daftar
          </Text>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:"#071826" },
  scroll: { flexGrow:1, justifyContent:"center", padding:24 },
  header: { alignItems:"center", marginBottom:30 },
  icon: { fontSize:50 },
  title: { fontSize:28, color:"#fff", fontWeight:"bold" },
  subtitle: { color:"#94A3B8" },
  card: { backgroundColor:"#0F2A44", borderRadius:25, padding:22 },
  input: {
    backgroundColor:"#071826",
    borderWidth:1,
    borderColor:"#3B82F6",
    marginBottom:12,
    padding:14,
    color:"#fff",
    borderRadius:14
  },
  error: { color:"#EF4444" },
  button: {
    backgroundColor:"#2563EB",
    padding:16,
    borderRadius:14,
    alignItems:"center"
  },
  buttonText: { color:"#fff", fontWeight:"bold" },
  link: { color:"#60A5FA", textAlign:"center", marginTop:12 }
});