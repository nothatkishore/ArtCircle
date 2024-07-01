import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Link, router } from 'expo-router'
import { OtpInput } from 'react-native-otp-entry';


const forgotPass = () => {

  const [number, setNumber] = useState('+91 9840287145')
  const [otp, setOTP] = useState('')
  const [click, setClick] = useState(false)

  const handleOTP = () => {
    if (otp.length < 4) {
      Alert.alert('Error', 'OTP Invalid')
      setOTP('')
      return
    }

    else {
      //Make a API request
      const isValidOtp = true
      if (isValidOtp)
        router.replace('/CreatePass')
    }
  }

  return (
    <SafeAreaView className='h-full w-full'>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View className='bg-[#161622] w-full h-full justify-end'>

          <View className='h-1/3 w-full justify-center items-center p-4'>
            <Text className='text-white text-2xl'>Verification</Text>
            <Text className='text-white text-center mt-3'>Enter the OTP you got via SMS to your registered mobile number
              <Text className='font-medium text-blue-700'>{number}</Text> </Text>
          </View>

          <View className='bg-white w-full h-2/3 rounded-t-[30px] justify-start p-5'>

            <View className='py-7 px-7'>
              <OtpInput
                value={otp}
                onTextChange={setOTP}
                numberOfDigits={4}
                tintColor="#ffa629"
                textInputStyle={{ color: 'white', borderColor: '#ffa629' }} // Set color to white
                autoFocus
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              // onPress={handleOTP}
              onPress={() => router.push('/CreatePass')}
              disabled={click}
            >
              <View className='bg-[#ffa629] p-2 rounded-lg my-6'>
                <Text className='text-center text-white text-xl'>
                  Verify
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      <StatusBar style='light' backgroundColor='#161622' />
    </SafeAreaView>
  )
}

export default forgotPass
