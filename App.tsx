import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './componets/FlatCards'
import ElevatedCard from './componets/ElevatedCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App