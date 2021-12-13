import React from 'react'
import { View,Image, Text, StyleSheet } from 'react-native'

export default function ImageAdder({source}) {
    return (
        <View>
        <Image style={styles.image} source={{uri: source}} />
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 150,
    }
})