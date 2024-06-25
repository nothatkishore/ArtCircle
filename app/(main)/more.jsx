import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ClickOption from '../../components/ClickOption'

const more = () => {
  return (
    <SafeAreaView className='bg-black h-full w-full items-center justify-center'>
      <ClickOption 
        name='Search Location'
      />

      <ClickOption 
        name='Search Products'
      />

      <ClickOption 
        name='Add Movies'
      />

      <ClickOption 
        name='Add Setprops'
      />

      <ClickOption 
        name='Write'
      />

      <ClickOption 
        name='Payments'
      />
    </SafeAreaView>
  )
}

export default more