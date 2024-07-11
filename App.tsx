import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './componets/FlatCards'
import ElevatedCard from './componets/ElevatedCard'
import FancyCard from './componets/FancyCard'
import ActionCard from './componets/ActionCard'
import ContactList from './componets/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard/>
        <FancyCard/>
        <ActionCard/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App