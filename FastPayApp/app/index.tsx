import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";

WebBrowser.maybeCompleteAuthSession();

export default function HomeScreen({ navigation }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Google Auth
  const [googleRequest, googleResponse, promptGoogleAsync] = Google.useAuthRequest(
    {
      clientId: "YOUR_EXPO_GOOGLE_CLIENT_ID",
      iosClientId: "YOUR_IOS_GOOGLE_CLIENT_ID",
      androidClientId: "YOUR_ANDROID_GOOGLE_CLIENT_ID",
      webClientId: "YOUR_WEB_GOOGLE_CLIENT_ID",
    }
  );

  // Facebook Auth
  const [fbRequest, fbResponse, promptFacebookAsync] = Facebook.useAuthRequest({
    clientId: "YOUR_FACEBOOK_APP_ID",
  });

  useEffect(() => {
    if (googleResponse?.type === "success") {
      Alert.alert("Google Login Success", "You have logged in with Google.");
    }
  }, [googleResponse]);

  useEffect(() => {
    if (fbResponse?.type === "success") {
      Alert.alert("Facebook Login Success", "You have logged in with Facebook.");
    }
  }, [fbResponse]);

  const validate = () => {
    let valid = true;
    if (!username) {
      setUsernameError("Username is required");
      valid = false;
    } else {
      setUsernameError("");
    }
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }
    return valid;
  };

  // const handleLogin = () => {
  //   if (validate()) {
  //     Alert.alert("Login", `Logged in as ${username}`);
  //   }
  // };

  const handleLogin = () => {
  if (validate()) {
    // navigate to Landing page
    navigation.replace("Landing"); 
  }
};

  return (
    <ImageBackground
      source={require("../assets/images/background.avif")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>FastPayCash</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          placeholderTextColor="#b2b2b2"
        />
        {usernameError ? (
          <Text style={styles.error}>{usernameError}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#b2b2b2"
        />
        {passwordError ? (
          <Text style={styles.error}>{passwordError}</Text>
        ) : null}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.or}>OR</Text>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => promptGoogleAsync()}
          disabled={!googleRequest}
        >
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.facebookButton}
          onPress={() => promptFacebookAsync()}
          disabled={!fbRequest}
        >
          <Text style={styles.facebookButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f2027",
  },
  container: {
    backgroundColor: "rgba(255,255,255,0.92)",
    borderRadius: 24,
    padding: 32,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 12,
  },
  title: {
    fontSize: 44,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    marginBottom: 32,
    color: "#ff4e50",
    letterSpacing: 2,
    textShadowColor: "#fff",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    textAlign: "center",
  },
  input: {
    width: 260,
    height: 48,
    borderColor: "#ff4e50",
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    fontSize: 17,
    color: "#222",
  },
  error: {
    color: "#ff4e50",
    fontSize: 14,
    marginBottom: 8,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: "#16a085",
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 44,
    marginBottom: 18,
    shadowColor: "#16a085",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    letterSpacing: 1,
  },
  or: {
    marginVertical: 12,
    color: "#888",
    fontSize: 17,
    fontWeight: "bold",
  },
  googleButton: {
    backgroundColor: "#fff",
    borderColor: "#4285F4",
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 44,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#4285F4",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  facebookButton: {
    backgroundColor: "#4267B2",
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 44,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#4267B2",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 0,
  },
  socialButtonText: {
    color: "#222",
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    marginLeft: 0,
  },
  facebookButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    marginLeft: 0,
  },
});
