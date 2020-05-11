import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import decks from './reducers'
import { setLocalNotification } from './helpers/notification'
import Deck from './components/Deck'
import Constants from 'expo-constants'
import Quiz from './components/Quiz'
import Home from './components/Home'
import AddCard from './components/AddCard'

const store = createStore(decks)
const Stack = createStackNavigator();

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store} >
        <NavigationContainer>
          <View style={{ height: Constants.statusBarHeight }} >
            <StatusBar
              backgroundColor="#b3e6ff"
              barStyle="dark-content"
            />
          </View>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Deck" component={Deck} />
            <Stack.Screen name="Add Card" component={AddCard} />
            <Stack.Screen name="Quiz" component={Quiz} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}
