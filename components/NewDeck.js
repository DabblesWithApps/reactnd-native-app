import React from 'react'
import { AsyncStorage, View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableHighlightBase } from 'react-native'
import { STORAGE_KEY } from '../constants'
import { saveDeckTitle } from '../helpers/api'
import { connect } from 'react-redux'
import { addDeck } from '../actions'

class NewDeck extends React.Component {
    state = {
        title: ''
    }
    handleTextChange = (text) => {
        this.setState({
            title: text
        })
    }
    handleSubmit = () => {
        const { title } = this.state
        const { dispatch } = this.props
        saveDeckTitle(title).then(() => {
            dispatch(addDeck(title))
            this.props.navigation.reset()
            this.props.navigation.navigate('Deck', { deck: { title } })
        })
    }
    render() {
        const { title } = this.state
        return (
            <View style={styles.newDeck} >
                <Text>What is the title of your new deck?</Text>
                <TextInput onChangeText={this.handleTextChange}
                    placeholder="Deck Title"
                    value={title}
                    style={{ alignSelf: 'stretch', height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, margin: 10 }}
                />
                <TouchableOpacity style={styles.submitBtn} onPress={this.handleSubmit}>
                    <Text style={{ color: 'white' }}>Create Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(NewDeck)

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