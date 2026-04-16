import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Platform, ScrollView, StyleSheet
} from "react-native";
import { useRouter } from "expo-router"; // ✅ TAMBAH INI

export default function RegisterScreen() {
  const router = useRouter(); // ✅ TAMBAH INI

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    const emailRegex = /\S+@\S+\.\S+/;

    if (!name || !email || !phone || !password || !confirm) {
      return setError("Semua field wajib diisi");
    }

    if (!emailRegex.test(email)) {
      return setError("Email tidak valid");
    }

    if (!/^\d+$/.test(phone) || phone.length < 10 || phone.length > 13) {
      return setError("Nomor harus 10–13 digit");
    }

    if (password.length < 8) {
      return setError("Password minimal 8 karakter");
    }

    if (password !== confirm) {
      return setError("Password tidak sama");
    }

    // 🔥 INI BAGIAN PALING PENTING (GANTI DARI navigation)
    router.push({
      pathname: "/login",
      params: { name, email, password }
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        <View style={styles.header}>
          <Text style={styles.icon}>🚀</Text>
          <Text style={styles.title}>Create Account</Text>
        </View>

        <View style={styles.card}>
          <TextInput style={styles.input} placeholder="Nama" onChangeText={setName} />
          <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />
          <TextInput style={styles.input} placeholder="Nomor (10–13 digit)" onChangeText={setPhone} />
          <TextInput style={styles.input} placeholder="Password (min 8 karakter)" secureTextEntry onChangeText={setPassword} />
          <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry onChangeText={setConfirm} />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          {/* 🔥 INI JUGA GANTI */}
          <Text style={styles.link} onPress={() => router.push("/login")}>
            Sudah punya akun? Login
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