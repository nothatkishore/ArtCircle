import {Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'

const loan = () => {
  return (
    <SafeAreaView>
      <Header/>
       <View className="text-center justify-items-center">
      {/* <Text className="text-center">loan</Text> */}
    </View>
    </SafeAreaView>
   
  )
}

export default loan