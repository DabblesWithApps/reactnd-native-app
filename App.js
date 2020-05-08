import * as React from 'react';
import { Text, View, StatusBar, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Decks from './components/Decks'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import Constants from 'expo-constants'
import { STORAGE_KEY } from './constants'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Decks" component={Decks} />
      <Tab.Screen name="New Deck" component={NewDeck} />
    </Tab.Navigator>
  );
}

export default class App extends React.Component {
  componentDidMount() {
    //AsyncStorage.removeItem(STORAGE_KEY).then(() => console.log("Data cleared"))
  }
  render() {
    return (
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
    )
  }
}