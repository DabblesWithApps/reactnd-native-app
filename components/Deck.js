import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'

function Deck({ deck }) {
    const navigation = useNavigation()
    return (
        <View style={styles.decks}>
            <Text>Title: {deck.title}</Text>
            <Text>Card Count: {deck.questions ? deck.questions.length : 0}</Text>
            <TouchableOpacity onPress={() => { navigation.push('Quiz', { deck }) }}>
                <Text>Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.push('Add Card', { deck }) }}>
                <Text>Add Card</Text>
            </TouchableOpacity>
        </View>
    )
}

function mapStateToProps(decks, { route }) {
    return {
        deck: decks[route.params.deck.title]
    }
}

export default connect(mapStateToProps)(Deck)

const styles = StyleSheet.create({
    deck: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})