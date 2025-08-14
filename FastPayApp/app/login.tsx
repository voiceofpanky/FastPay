import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // TODO: Implement login logic
    alert('Login with username/password not implemented.');
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google login
    alert('Google login not implemented.');
  };

  const handleFacebookLogin = () => {
    // TODO: Implement Facebook login
    alert('Facebook login not implemented.');
  };

  return (
    <View style={styles.background}>
      <View style={styles.loginCard}>
        <Text style={styles.title}>Sign in to FastPay</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoComplete="username"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoComplete="current-password"
          />
        </View>
        <TouchableOpacity style={styles.primaryBtn} onPress={handleLogin}>
          <Text style={styles.primaryBtnText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.divider}><Text style={styles.dividerText}>or</Text></View>
        <TouchableOpacity style={styles.googleBtn} onPress={handleGoogleLogin}>
          <Text style={styles.googleBtnText}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookBtn} onPress={handleFacebookLogin}>
          <Text style={styles.facebookBtnText}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f2ff', // light blue
  },
  loginCard: {
    backgroundColor: '#fff',
    paddingVertical: 40,
    paddingHorizontal: 24,
    borderRadius: 18,
    boxShadow: '0 8px 32px rgba(44, 62, 80, 0.18)', // for web
    shadowColor: '#2c3e50', // for native
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 32,
    elevation: 8,
    width: 320,
    alignItems: 'stretch',
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#223366',
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: 'sans-serif',
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    marginBottom: 6,
    color: '#223366',
    fontSize: 15,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: '#cfd8dc',
    borderWidth: 1,
    borderRadius: 7,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  primaryBtn: {
    backgroundColor: '#4f8cff',
    borderRadius: 7,
    paddingVertical: 13,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  primaryBtnText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 12,
  },
  dividerText: {
    flex: 1,
    textAlign: 'center',
    color: '#888',
    fontSize: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    zIndex: 1,
  },
  googleBtn: {
    backgroundColor: '#fff',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 7,
    paddingVertical: 13,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  googleBtnText: {
    color: '#444',
    fontSize: 16,
    fontWeight: '500',
  },
  facebookBtn: {
    backgroundColor: '#1877F3',
    borderRadius: 7,
    paddingVertical: 13,
    alignItems: 'center',
    marginBottom: 0,
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  facebookBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
