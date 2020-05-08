import React from 'react'
import { AsyncStorage, View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableHighlightBase } from 'react-native'
import { STORAGE_KEY } from '../constants'

export default class AddCard extends React.Component {
    state = {
        question: '',
        answer: ''
    }
    handleTextChange = (text, name) => {
        this.setState({
            [name]: text
        })
    }
    addCard = () => {
        const { question, answer } = this.state
        const { deck } = this.props.route.params

        console.log(this.state)
        console.log(deck)
        let updatedDeck

        if (deck.questions) {
            updatedDeck = {
                ...deck,
                questions: deck.questions.concat([{ question, answer }])
            }
        } else {
            updatedDeck = {
                ...deck,
                questions: [
                    { question, answer }
                ]
            }
        }

        console.log(updatedDeck)

        AsyncStorage.mergeItem(
            STORAGE_KEY,
            JSON.stringify({ [deck.title]: updatedDeck })
        ).then(data => console.log(data))
    }
    render() {
        const { question, answer } = this.state
        return (
            <View>
                <Text>Question/Word</Text>
                <TextInput value={question} onChangeText={(text) => this.handleTextChange(text, "question")} placeholder="What year was the Declaration of Independence signed?" />
                <Text>Answer/Definition</Text>
                <TextInput value={answer} onChangeText={(text) => this.handleTextChange(text, "answer")} placeholder="1776" />
                <TouchableOpacity onPress={this.addCard}>
                    <Text>Submit Card</Text>
                </TouchableOpacity>
            </View>
        )
    }
}