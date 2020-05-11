import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formBtn: {
        backgroundColor: 'black',
        margin: 10,
        padding: 10,
        borderRadius: 15,
    },
    greenBtn: {
        backgroundColor: 'green',
        margin: 10,
        borderRadius: 15,
        padding: 10,
    },
    redBtn: {
        backgroundColor: 'red',
        margin: 10,
        borderRadius: 15,
        padding: 10,
    },
    white: {
        color: 'white'
    },
    row: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 24
    },
    redBorder: {
        borderColor: 'red'
    },
    input: {
        alignSelf: 'stretch',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    outlined: {
        borderWidth: 3,
        borderRadius: 15,
        padding: 10,
        margin: 10,
    }
})