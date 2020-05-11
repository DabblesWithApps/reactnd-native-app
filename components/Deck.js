import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'
import styles from '../helpers/styles'

function Deck({ deck }) {
    const navigation = useNavigation()
    return (
        <View style={styles.center}>
            <Text style={styles.title}>{deck.title}</Text>
            <Text>Cards: {deck.questions ? deck.questions.length : 0}</Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.formBtn} onPress={() => { navigation.push('Quiz', { deck }) }}>
                    <Text style={styles.white}>Start a Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.formBtn} onPress={() => { navigation.push('Add Card', { deck }) }}>
                    <Text style={styles.white}>Add Card</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function mapStateToProps(decks, { route }) {
    return {
        deck: decks[route.params.deck.title]
    }
}

export default connect(mapStateToProps)(Deck)