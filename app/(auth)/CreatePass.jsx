import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Link, router } from 'expo-router'
import logo from '../../assets/images/logo.png'

const forgotPass = () => {
  const [password, setpassword] = useState(
    {
      newPassword: '',
      conPassword: ''
    })

  return (
    <SafeAreaView className='h-full w-full'>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View className='bg-[#161622] w-full h-full justify-end'>

          <View className='h-1/3 w-full justify-center items-center'>
            <Image
              source={logo}
              className='h-[100px] w-[100px] mt-7'
              resizeMode='contain'
            />
            <Text className='text-center p-7 text-white text-lg'>Your New password must be different from your old password</Text>
          </View>

          <View className='bg-white w-full h-2/3 rounded-t-[30px] justify-start p-5'>
            <View className='bg-slate-50 shadow-lg p-2 rounded-lg my-4 border'>
              <TextInput
                placeholder='New password'
                onChangeText={(text) => setpassword({ ...password, newPassword: text })}
                value={password.newPassword}
              />
            </View>

            <View className='bg-slate-50 shadow-lg p-2 rounded-lg my-4 border'>
              <TextInput
                placeholder='Confirm password'
                onChangeText={(text) => setpassword({ ...password, conPassword: text })}
                value={password.conPassword}
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.replace('/home')}
            >
              <View className='bg-[#ffa629] p-2 rounded-lg my-6'>
                <Text className='text-center text-white text-xl'>
                  Create and Login
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
