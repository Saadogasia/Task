import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Welcome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  font: {
    fontSize: 20,
  },
});
