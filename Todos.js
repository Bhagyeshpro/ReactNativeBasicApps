import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Todos({ title }) {
  return (
    <View style={styles.container}>
      <Text title="Working" />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
