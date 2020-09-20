import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    this.props.navigation.setOptions({
      headerBackTitle: "",
      headerShown: false,
    });
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../assets/images/test-logo.png")}
          style={{ width: "100%", height: 300 }}
          resizeMode="contain"
        />
        <Text style={styles.hero_text}>Darkness Falls</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <View style={{ flexDirection: "row", margin: 20, paddingVertical: 0 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
            style={{
              backgroundColor: "#0d47a1",
              padding: 10,
              width: 150,
              borderRadius: 30,
              marginRight: 20,
              marginVertical: 2,
            }}
          >
            <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Register")}
            style={{
              backgroundColor: "#fff",
              padding: 10,
              width: 150,
              borderRadius: 30,
              marginVertical: 2,
              borderWidth: 1,

              borderColor: "#ff8c00",
            }}
          >
            <Text
              style={{ textAlign: "center", color: "#ff8c00", fontSize: 18 }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  hero_text: {
    fontSize: 40,
    marginHorizontal: 20,
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
