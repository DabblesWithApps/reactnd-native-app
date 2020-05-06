import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function NewDeck() {
    return (
        <View style={styles.newDeck}>
            <Text>What is the title of your new deck?</Text>
            <TextInput
                placeholder="Deck Title"
                style={{ alignSelf: 'stretch', height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, margin: 10 }}
            />
            <TouchableOpacity style={styles.submitBtn}>
                <Text style={{ color: 'white' }}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    newDeck: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitBtn: {
        backgroundColor: 'black',
        padding: 10
    }
})