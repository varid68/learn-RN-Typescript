import React from 'react'
import { SafeAreaView, StatusBar, Text } from 'react-native'

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={true ? 'light-content' : 'dark-content'} />
      <Text>HALO</Text>
    </SafeAreaView>
  )
}

export default App
