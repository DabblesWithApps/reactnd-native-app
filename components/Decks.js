import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'

const DeckLink = ({ title }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => { navigation.push('Deck') }}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}
const Stack = createStackNavigator();

export default function Decks() {
    return (
        <View style={styles.decks}>
            <DeckLink title="Deck 1" />
            <DeckLink title="Deck 2" />
            <DeckLink title="Deck 3" />
        </View>
    )
}

const styles = StyleSheet.create({
    decks: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})