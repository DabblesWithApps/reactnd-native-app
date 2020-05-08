import React from 'react'
import { AsyncStorage, View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableHighlightBase } from 'react-native'
import { STORAGE_KEY } from '../constants'

export default class NewDeck extends React.Component {
    state = {
        title: ''
    }
    handleTextChange = (text) => {
        this.setState({
            title: text
        })
    }
    render() {
        const { title } = this.state
        return (
            <View style={styles.newDeck} >
                <Text>What is the title of your new deck?</Text>
                <TextInput onChangeText={this.handleTextChange}
                    placeholder="Deck Title"
                    value={this.state.title}
                    style={{ alignSelf: 'stretch', height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, margin: 10 }}
                />
                <TouchableOpacity style={styles.submitBtn} onPress={() => {
                    AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
                        [title]: { title: title }
                    })).then(console.log("it worked."))
                }}>
                    <Text style={{ color: 'white' }}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
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