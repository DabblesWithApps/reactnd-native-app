import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { clearLocalNotification, setLocalNotification } from '../helpers/notification'

class Quiz extends React.Component {
    state = {
        correct: 0,
        answered: 0,
        showAnswer: false
    }
    componentDidMount() {
        clearLocalNotification().then(setLocalNotification)
    }
    handleCorrect = () => {
        const { correct, answered } = this.state
        this.setState({
            correct: correct + 1,
            answered: answered + 1
        })
    }
    handleIncorrect = () => {
        const { answered } = this.state
        this.setState({
            answered: answered + 1
        })
    }
    resetQuiz = () => {
        this.setState({
            correct: 0,
            answered: 0
        })
    }
    showAnswer = () => {
        this.setState({
            showAnswer: true
        })
    }
    unshowAnswer = () => {
        this.setState({
            showAnswer: false
        })
    }
    render() {
        const { correct, answered, showAnswer } = this.state
        const { deck } = this.props.route.params

        if (!deck.questions || deck.questions.length === 0) {
            return (
                <View>
                    <Text>This deck has no questions.</Text>
                </View>
            )
        }

        const questionCount = deck.questions.length
        const complete = answered === questionCount

        if (complete) {
            return (
                <View>
                    <Text>Score: {`${correct}/${questionCount}`}</Text>
                    <TouchableOpacity onPress={this.resetQuiz}>
                        <Text>
                            Restart Quiz
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Text>
                            Back to Deck
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            const textToShow = showAnswer ? deck.questions[answered].answer : deck.questions[answered].question
            return (
                <View>
                    <Text>
                        Remaining cards: {`${questionCount - answered}`}
                    </Text>
                    <Text>
                        {textToShow}
                    </Text>
                    <TouchableOpacity onPressIn={this.showAnswer} onPressOut={this.unshowAnswer}>
                        <Text>Show Answer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handleCorrect}>
                        <Text>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handleIncorrect}>
                        <Text>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}

export default connect()(Quiz)
