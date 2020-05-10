import React from 'react'
import { AsyncStorage, View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableHighlightBase } from 'react-native'
import { STORAGE_KEY } from '../constants'
import { addCardToDeck } from '../helpers/api'
import { addCard } from '../actions'
import { connect } from 'react-redux'

class AddCard extends React.Component {
    state = {
        question: '',
        answer: ''
    }
    handleTextChange = (text, name) => {
        this.setState({
            [name]: text
        })
    }
    handleSubmit = () => {
        const { title } = this.props.route.params.deck
        addCardToDeck(title, this.state).then(() => this.props.dispatch(addCard(title, this.state)))
    }
    render() {
        const { question, answer } = this.state
        return (
            <View>
                <Text>Question/Word</Text>
                <TextInput value={question} onChangeText={(text) => this.handleTextChange(text, "question")} placeholder="What year was the Declaration of Independence signed?" />
                <Text>Answer/Definition</Text>
                <TextInput value={answer} onChangeText={(text) => this.handleTextChange(text, "answer")} placeholder="1776" />
                <TouchableOpacity onPress={this.handleSubmit}>
                    <Text>Submit Card</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(AddCard)