import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from '../helpers/notification'
import styles from '../helpers/styles'

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
                <View style={styles.center}>
                    <Text>This deck has no questions.</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.btn}>
                            Back to Deck
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }

        const questionCount = deck.questions.length
        const complete = answered === questionCount

        if (complete) {
            return (
                <View style={styles.center}>
                    <Text>Score: {`${correct}/${questionCount}`}</Text>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.formBtn} onPress={this.resetQuiz}>
                            <Text style={styles.white}>
                                Restart Quiz
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.formBtn} onPress={() => this.props.navigation.goBack()}>
                            <Text style={styles.white}>
                                Back to Deck
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else {
            const textToShow = showAnswer ? deck.questions[answered].answer : deck.questions[answered].question
            return (
                <View style={styles.center}>
                    <Text>
                        Remaining cards: {`${questionCount - answered}`}
                    </Text>
                    <Text>
                        {textToShow}
                    </Text>
                    <TouchableOpacity style={styles.formBtn} onPressIn={this.showAnswer} onPressOut={this.unshowAnswer}>
                        <Text style={styles.white}>Show Answer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.greenBtn} onPress={this.handleCorrect}>
                        <Text style={styles.white}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.redBtn} onPress={this.handleIncorrect}>
                        <Text style={styles.white}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}

export default connect()(Quiz)