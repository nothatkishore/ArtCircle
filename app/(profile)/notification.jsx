import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const notification = () => {
  return (
    <SafeAreaView className='bg-black h-full w-full items-center justify-center'>
      <Text className='text-white'>
        No Notifications
      </Text>
    </SafeAreaView>
  )
}

export default notification