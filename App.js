import * as React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Decks from './components/Decks'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import Constants from 'expo-constants'

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

export default function App() {
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
        <Stack.Screen name="Add Card" component={() => (
          <Text>Add a card</Text>
        )} />
        <Stack.Screen name="Quiz" component={() => (
          <Text>Start a quiz</Text>
        )} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}