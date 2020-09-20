import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default class LoginScreen extends React.Component {
  render() {
    this.props.navigation.setOptions({
      headerBackTitle: "",
      headerShown: false,
    });
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../assets/images/test-logo.png")}
          style={{ width: "100%", height: 150 }}
          resizeMode="contain"
        />
        <Text style={styles.hero_text}>Login</Text>
        <Text>Sign in to continue</Text>
        <StatusBar style="auto" />
        <TextInput style={styles.input} placeholder="Username"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        ></TextInput>
        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            margin: 20,
            paddingVertical: 0,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#0d47a1",
              padding: 10,
              borderRadius: 30,
              marginTop: 30,
              marginVertical: 2,
            }}
          >
            <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 16, textAlign: "center" }}>
          Forgot Password?
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center", marginTop: 20 }}>
          Don't have an account? Register{" "}
          <Text
            style={{ color: "#3f51b5" }}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            here
          </Text>
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <View style={styles.social_media}>
            <Text style={{ fontSize: 16, color: "#fff", fontWeight: "bold" }}>
              f
            </Text>
          </View>
          <View style={styles.social_media}>
            <Text style={{ fontSize: 16, color: "#fff", fontWeight: "bold" }}>
              G
            </Text>
          </View>
          <View style={styles.social_media}>
            <Text style={{ fontSize: 16, color: "#fff", fontWeight: "bold" }}>
              in
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 35,
  },
  input: {
    marginTop: 30,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  hero_text: {
    fontSize: 40,
    marginTop: 20,
  },
  social_media: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#3f51b5",
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
