import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const notification = () => {
  return (
    <SafeAreaView className='bg-[#f0f3f6] h-full w-full'>
      <View className='h-auto bg-[#ffa629] w-full p-4 items-center'>
        <Text className='text-white text-xl font-light'>Notification center</Text>
      </View>
    </SafeAreaView>
  )
}

export default notification