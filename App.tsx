import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import Header from './src/Header'

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={true ? 'light-content' : 'dark-content'} />
      <Header title="Ini Header" />
    </SafeAreaView>
  )
}

export default App
