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
import ImageAdder from "./src/ImageAdder";
import Todos from "./src/Todos";

export default function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [imageURLInput, setImageURLInput] = useState("");
  const [images, setImages] = useState([]);

  const addTodo = () => {
    setTodos([todoInput, ...todos]);
    // Make input field blank after pressing button
    setTodoInput("");
  };

  const addImage = () => {
    setImages([imageURLInput, ...images]);
    setImageURLInput("");
  }

  return (
    <SafeAreaView>
      <View>
        <Text>React Native Basic Apps!</Text>
      </View>
        {todos.map((todo) => ( 
          <Todos title={todo}/>
        ))}
        <TextInput
          style={styles.todoInput}
          value={todoInput}
          placeholder="Enter Your Tasks..."
          onChangeText={(text) => setTodoInput(text)}
        />
        <Button onPress={addTodo} title="Add TODO"/>

        <Text>Enter Image URL:</Text>
        {images.map((image) => (
          <ImageAdder source={image}/>
        ))}
        <ImageAdder/>
        <TextInput 
          style={styles.todoInput}
          placeholder="Enter Image URL ..."
          value={imageURLInput}
          onChangeText={(text) => setImageURLInput(text)}
        />
        <Button onPress={addImage} title="Add IMG"/>

        
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
