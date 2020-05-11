import React from 'react'
import { View, TouchableOpacity, KeyboardAvoidingView, TextInput, Text, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../helpers/api'
import styles from '../helpers/styles'

class NewDeck extends React.Component {
    state = {
        title: '',
        error: false
    }
    handleTextChange = (text) => {
        this.setState({
            title: text
        })
    }
    handleSubmit = () => {
        const { title } = this.state
        const { dispatch } = this.props

        if (title === '') {
            this.setState({
                error: true
            })
        } else {
            this.setState({
                title: '',
                error: false
            }, () => {
                saveDeckTitle(title).then(() => {
                    dispatch(addDeck(title))
                    this.props.navigation.navigate('Deck', { deck: { title } })
                })
            })
        }
    }
    render() {
        const { title, error } = this.state
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.center}>
                        <Text>What is the title of your new deck?</Text>
                        <TextInput onChangeText={this.handleTextChange}
                            placeholder="Deck Title"
                            value={title}
                            style={[styles.input, error && { borderColor: 'red' }]}
                        />
                        <TouchableOpacity style={styles.formBtn} onPress={this.handleSubmit}>
                            <Text style={{ color: 'white' }}>Create Deck</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

export default connect()(NewDeck)