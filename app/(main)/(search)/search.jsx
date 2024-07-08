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
    <SafeAreaView className='bg-[#f0f3f6] h-full w-full'>
      <Header />
      <View className='mt-7'>
        <ClickOption
          name='Search locations'
          icon={map}
          handlePress={() => router.push('/searchLocation')}
        />

        <ClickOption
          name='Search stores'
          icon={art}
          handlePress={() => router.push('/searchStores')}
        />
      </View>
    </SafeAreaView>
  )
}

export default search