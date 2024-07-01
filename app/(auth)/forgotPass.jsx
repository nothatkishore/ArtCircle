import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Link, router } from 'expo-router'

const forgotPass = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  return (
    <SafeAreaView className='h-full w-full'>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View className='bg-[#ffa629] w-full h-full justify-end'>

          <View className='h-1/3 w-full justify-center items-center p-4'>
            <Text className='text-white text-2xl'>Verification</Text>
            <Text className='text-white text-center mt-3'>We will send you a 
            <Text className='font-semibold'> One Time Password</Text> to your phone number</Text>
          </View>

          <View className='bg-[#f0f3f6] w-full h-2/3 rounded-t-[30px] justify-start p-5'>
            <View className='bg-slate-50 shadow-lg p-2 rounded-lg my-4 border'>
              <TextInput
                placeholder='Mobile number'
                onChangeText={(text) => setForm({ ...form, email: text })}
                value={form.email}
                keyboardType='numeric'
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push('/OTP')}
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
      <StatusBar style='light' backgroundColor='#ffa629' />
    </SafeAreaView>
  )
}

export default forgotPass
