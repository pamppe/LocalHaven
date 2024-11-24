import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

// Placeholder for detected devices
const devices = [
  { id: "1", name: "Device 1", ip: "192.168.1.101" },
  { id: "2", name: "Device 2", ip: "192.168.1.102" },
];

export default function DeviceScanScreen() {
  const [detectedDevices, setDetectedDevices] = useState([]);

  useEffect(() => {
    // Simulate scanning for devices
    setTimeout(() => setDetectedDevices(devices), 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detected Devices</Text>
      <FlatList
        data={detectedDevices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.deviceItem}>
            <Text>{item.name}</Text>
            <Text>{item.ip}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  deviceItem: { padding: 12, borderBottomWidth: 1, borderBottomColor: "#ddd" },
});
