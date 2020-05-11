import React from 'react'
import { ScrollView, View, Text, Animated, TouchableOpacity } from 'react-native'
import { getDecks } from '../helpers/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import styles from '../helpers/styles'

class DeckLink extends React.Component {
    state = {
        bounceValue: new Animated.Value(1)
    }
    handlePress = () => {
        const { deck, navigation } = this.props
        const { bounceValue } = this.state
        Animated.sequence([
            Animated.timing(bounceValue, { duration: 200, toValue: 2.04 }),
            Animated.spring(bounceValue, { toValue: 1, friction: 4 })
        ]).start(() => navigation.push('Deck', { deck }))

    }
    render() {
        const { bounceValue } = this.state
        const { deck } = this.props
        const questionCount = deck.questions ? deck.questions.length : 0
        return (
            <TouchableOpacity style={[styles.outlined, styles.center]} onPress={this.handlePress}>
                <Animated.Text
                    style={[styles.title, { transform: [{ scale: bounceValue }] }]}>{deck.title}
                </Animated.Text>
                <Text>Cards: {questionCount}</Text>
            </TouchableOpacity>
        )
    }
}

class Decks extends React.Component {
    componentDidMount() {
        return getDecks()
            .then((decks) => {
                this.props.dispatch(receiveDecks(decks))
            })
    }
    render() {
        const { decks } = this.props

        if (decks === undefined) {
            return (
                <View style={styles.center}>
                    <Text>You have no decks yet!</Text>
                </View>
            )
        }

        return (
            <ScrollView>
                <View style={[styles.center, { alignItems: 'stretch' }]}>
                    {Object.keys(decks).map(key => <DeckLink navigation={this.props.navigation} key={key} deck={decks[key]} />)}
                </View>
            </ScrollView>
        )
    }
}

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Decks)