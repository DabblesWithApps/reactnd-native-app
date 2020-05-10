import { AsyncStorage, View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableHighlightBase } from 'react-native'


export const STORAGE_KEY = "STORAGE_KEY"

export function getDecks() {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then(JSON.parse)
}

export function getDeck(id) {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then(JSON.parse)
        .then(decks => decks[id])
}

export function saveDeckTitle(title) {
    const deckId = title
    const deckData = {
        title
    }
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [deckId]: deckData
    }))
}

export function addCardToDeck(title, card) {
    return getDeck(title)
        .then(deck => {
            if (deck.questions) {
                return {
                    ...deck,
                    questions: deck.questions.concat([card])
                }
            } else {
                return {
                    ...deck,
                    questions: [card]
                }
            }
        })
        .then(deck => {
            const deckId = title
            return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
                [deckId]: deck
            }))
        })
}