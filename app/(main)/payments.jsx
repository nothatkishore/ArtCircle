import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

const payments = () => {
  return (
    <SafeAreaView className='bg-black h-full w-full'>
      <Header />

      <View className='h-full w-full bg-blue-100'>

        <View className='h-1/2 bg-blue-300 w-full'>

        </View>

        <View className='h-1/2 bg-blue-500 w-full'>
          <View className='h-full w-1/2 bg-blue-400'>

          </View>

          <View className='h-full w-1/2 bg-blue-600'>
            
          </View>
        </View>

      </View>

    </SafeAreaView>
  )
}

export default payments