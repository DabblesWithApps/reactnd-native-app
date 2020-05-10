import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

export default function decks(decks = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...decks,
                ...action.decks
            }
        case ADD_DECK: {
            const { title } = action
            return {
                ...decks,
                [title]: { title }
            }
        }
        case ADD_CARD: {
            const { title, card } = action

            if (decks[title].questions) {
                return {
                    ...decks,
                    [title]: {
                        ...decks[title],
                        questions: decks[title].questions.concat([card])
                    }
                }
            } else {
                return {
                    ...decks,
                    [title]: {
                        ...decks[title],
                        questions: [card]
                    }
                }
            }
        }
        default:
            return decks
    }
}