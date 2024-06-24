import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import ClickOption from '../../../components/ClickOption'
import art from '../../../assets/icons/art.png'
import map from '../../../assets/icons/map.png'
import { router } from 'expo-router'

const search = () => {
  return (
    <SafeAreaView className='bg-black h-full w-full'>
      <Header />
      <ClickOption 
        name='Search locations'
        icon={map}
        handlePress={() => router.push('/searchLocation')}
      />
      
      <ClickOption 
        name='Search products'
        icon={art}
        handlePress={() => router.push('/searchProducts')}
      />
    </SafeAreaView>
  )
}

export default search