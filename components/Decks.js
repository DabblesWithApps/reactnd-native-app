import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'
import { STORAGE_KEY } from '../constants'
import { getDecks } from '../helpers/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'

const DeckLink = ({ deck }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => { navigation.push('Deck', { deck }) }}>
            <Text>{deck.title}</Text>
        </TouchableOpacity>
    )
}

class Decks extends React.Component {
    componentDidMount() {
        return getDecks()
            .then((decks) => {
                console.log(decks)
                this.props.dispatch(receiveDecks(decks))
            })
    }
    render() {
        const { decks } = this.props

        if (decks === undefined) {
            return (
                <View style={styles.decks}>
                    <Text>You have no decks yet!</Text>
                </View>
            )
        }

        return (
            <View style={styles.decks} >
                {Object.keys(decks).map(key => <DeckLink key={key} deck={decks[key]} />)}
            </View>
        )
    }
}

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Decks)

const styles = StyleSheet.create({
    decks: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})