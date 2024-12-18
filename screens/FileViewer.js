import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FileViewer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>File Viewer</Text>
      <Text>Browse your files here...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
});
