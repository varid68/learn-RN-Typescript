import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

interface Props {
  title: string
}

const Header: React.FC<Props> = props => {
  const [toggle, setToggle] = useState<number>(0)

  const _onClick = (value: number): void => {
    const a: number = Math.random()
    const b: number = 9

    const c: number = a + b + value
    setToggle(c)
  }

  return (
    <View>
      <TouchableOpacity onPress={() => _onClick(90)}>
        <Text>{props.title}</Text>
      </TouchableOpacity>
      <Text>{toggle}</Text>
    </View>
  )
}

export default Header
