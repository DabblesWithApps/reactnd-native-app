import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Deck() {
    const navigation = useNavigation()
    return (
        <View style={styles.decks}>
            <Text>Title</Text>
            <Text>Number of Cards</Text>
            <TouchableOpacity onPress={() => { navigation.push('Add Card') }}>
                <Text>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.push('Quiz') }}>
                <Text>Quiz</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    deck: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})