import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Todos from "./Todos";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([input, ...todos]);
    // Make input field blank after pressing button
    setInput("");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>React Native Basic Apps!</Text>
        {todos.map((todo) => {
          <Todos title={todo} />;
        })}
        <TextInput
          style={styles.todoInput}
          value={input}
          placeholder="Enter Your Tasks..."
          onChangeText={(text) => setInput(text)}
        />
        <Button onPress={addTodo} title="Add TODO" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "!00%",
    backgroundColor: "#FFf",
    alignItems: "center",
    justifyContent: "center",
  },
  todoInput: {
    margin: 20,
    height: 20,
    borderColor: "#ff0000",
    borderwidth: 10,
  },
});
