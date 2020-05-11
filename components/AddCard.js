import React from 'react'
import { View, TouchableOpacity, KeyboardAvoidingView, TextInput, Text, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { addCardToDeck } from '../helpers/api'
import { addCard } from '../actions'
import { connect } from 'react-redux'
import styles from '../helpers/styles'

class AddCard extends React.Component {
    state = {
        question: '',
        answer: '',
        submitAttempt: false
    }
    handleTextChange = (text, name) => {
        this.setState({
            [name]: text
        })
    }
    handleSubmit = () => {
        const { title } = this.props.route.params.deck
        const { question, answer } = this.state
        const card = { question, answer }

        if (question === '' || answer === '') {
            this.setState({
                submitAttempt: true
            })
        } else {
            this.setState({
                question: '',
                answer: '',
                submitAttempt: false
            }, () => {
                addCardToDeck(title, card).then(() => this.props.dispatch(addCard(title, card))).then(this.props.navigation.goBack())
            })

        }
    }
    render() {
        const { question, answer, submitAttempt } = this.state
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.center}>
                        <Text>Question/Word</Text>
                        <TextInput style={[styles.input, (question === '' && submitAttempt) && styles.redBorder]} value={question} onChangeText={(text) => this.handleTextChange(text, "question")} placeholder="What year was the Declaration of Independence signed?" />
                        <Text>Answer/Definition</Text>
                        <TextInput style={[styles.input, (answer === '' && submitAttempt) && styles.redBorder]} value={answer} onChangeText={(text) => this.handleTextChange(text, "answer")} placeholder="1776" />
                        <TouchableOpacity style={styles.formBtn} onPress={this.handleSubmit}>
                            <Text style={{ color: 'white' }}>Submit Card</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

export default connect()(AddCard)