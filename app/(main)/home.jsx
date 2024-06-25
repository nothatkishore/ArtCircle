import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import { StatusBar } from 'expo-status-bar' 

const home = () => {
  return (
    <SafeAreaView className='bg-[#f0f3f6] h-full w-full'>
        <Header />
    </SafeAreaView>
  )
}

export default home