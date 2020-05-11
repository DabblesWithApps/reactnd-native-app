import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewDeck from './NewDeck'
import Decks from './Decks'

const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Decks" component={Decks} />
            <Tab.Screen name="New Deck" component={NewDeck} />
        </Tab.Navigator>
    );
}