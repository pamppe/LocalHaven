import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to LocalHaven</Text>
      <Button
        title="Scan for Devices"
        onPress={() => navigation.navigate("DeviceScan")}
      />
      <Button
        title="Browse Files"
        onPress={() => navigation.navigate("FileViewer")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
});
