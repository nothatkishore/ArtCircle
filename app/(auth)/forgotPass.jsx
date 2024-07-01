import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Link, router } from 'expo-router'

const forgotPass = () => {
  const [Mobile, setMobile] = useState('')

  const handlePress = () => {
    if (Mobile.length < 10) {
      Alert.alert('Invalid', 'Enter a valid phone number')
      setMobile('')
      return
    }

    //send a API request to backend
    const vaild_mobile = true
    if (vaild_mobile)
      router.push('/OTP')
    else 
    {
      Alert.alert('Invalid credential', 'Enter a registered mobile number or contact Admin')
      setMobile('')
      return
    }
  }

  return (
    <SafeAreaView className='h-full w-full'>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View className='bg-black w-full h-full justify-end'>

          <View className='h-1/3 w-full justify-center items-center p-4'>
            <Text className='text-white text-2xl'>Verification</Text>
            <Text className='text-white text-center mt-3'>We will send you a
              <Text className='font-semibold'> One Time Password</Text> to your phone number</Text>
          </View>

          <View className='bg-black w-full h-2/3 rounded-t-[30px] justify-start p-5'>
            <View className='bg-slate-50 shadow-lg p-2 rounded-lg my-4 border'>
              <TextInput
                placeholder='Mobile number'
                onChangeText={(text) => setMobile(text)}
                value={Mobile}
                keyboardType='numeric'
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handlePress}
            // onPress={() => router.push('/OTP')}
            >
              <View className='bg-[#ffa629] p-2 rounded-lg my-6'>
                <Text className='text-center text-white text-xl'>
                  Get OTP
                </Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </KeyboardAvoidingView>
      <StatusBar style='light' backgroundColor='#000' />
    </SafeAreaView>
  )
}

export default forgotPass
