import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [gigs, setGigs] = useState([
    {
      description: "Freelancer.com",
      amount: 399,
    }
  ])

  const addGig = () => {
    setGigs([
      ...gigs,
      {
        description: description,
        amount: amount,
      }
    ]);
    setDescription("");
    setAmount("");
  }

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text>React Native Gigs And Earning Counting Apps!</Text>
      <TextInput 
        placeholder="Enter Your Gig Name..." 
        style={styles.gigInput}
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <TextInput 
        placeholder="Enter the amount you made in USD ($)..."
        keyboardType="numeric"
        style={styles.gigInput}
        value={amount}
        onChangeText={number => setAmount(number)}
      />
      <Button style={styles.addButton} disabled={!description && !amount} onPress={addGig} title="Add Gig"/>
      {gigs.map(gig => (
        <View>
          <Text>{gig.description}</Text>
          <Text>${gig.amount}</Text>
        </View>
      ))}

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  addButton:{
    padding: 20,
  },
  gigInput:{
    borderRadius: 50,
    width: "90%",
    borderColor: "red",
    borderWidth: 1,
    margin: 30,
  },
});
