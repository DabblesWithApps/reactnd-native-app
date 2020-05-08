import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'
import { STORAGE_KEY } from '../constants'

const DeckLink = ({ deck }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => { navigation.push('Deck', { deck }) }}>
            <Text>{deck.title}</Text>
        </TouchableOpacity>
    )
}

export default class Decks extends React.Component {
    state = {
        data: null
    }
    componentDidMount() {
        return AsyncStorage.getItem(STORAGE_KEY)
            .then((data) => {
                console.log(JSON.parse(data))
                this.setState({ data: JSON.parse(data) })
            })
    }
    render() {
        const { data } = this.state

        if (data === null) {
            return (
                <View style={styles.decks}>
                    <Text>You have no decks yet!</Text>
                </View>
            )
        }

        return (
            <View style={styles.decks} >
                {Object.keys(data).map(key => <DeckLink key={key} deck={data[key]} />)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    decks: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})