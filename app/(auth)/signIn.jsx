import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Link, router } from 'expo-router'

const signIn = () => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handlePress = () => 
  {
    if (form.username === '' || form.password.length < 0) 
    {
      Alert.alert('Invalid credentials', 'Enter valid username and password combination')
      return
    }

    //send form data as a API request
    const valid_user = true //store response as true or false in valid_user
    if (valid_user)
      router.replace('/home')
    else 
    {
      Alert.alert('Invalid user', 'User does not exist')
      setForm({...form, password : ''})
      return
    }
  }

  return (
    <SafeAreaView className='h-full w-full'>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View className='bg-[#ffa629] w-full h-full justify-end'>

          <View className='h-2/5 w-full justify-center items-center'>
            <Text className='text-white text-2xl font-medium'>Hello
              <Text className='text-3xl text-orange-100'> Artisians!</Text>
            </Text>
            <Text className='text-white text-xl font-base'>Sign in to continue</Text>
          </View>

          <View className='bg-[#f0f3f6] w-full h-3/5 rounded-t-[30px] justify-start p-5'>
            <View className='bg-slate-50 shadow-lg p-2 rounded-lg my-4 border'>
              <TextInput
                placeholder='Enter username'
                onChangeText={(text) => setForm({ ...form, username: text })}
                value={form.email}
              />
            </View>

            <View className='bg-slate-50 shadow-lg p-2 rounded-lg my-3 border'>
              <TextInput
                placeholder='Enter password'
                onChangeText={(text) => setForm({ ...form, password: text })}
                value={form.password}
              />
            </View>


            <View>
              <Link
                href='/forgotPass'
                className='text-right text-blue-600 font-medium'
              >
                <Text>Forgot password ?</Text>
              </Link>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handlePress}
            // onPress={() => router.push('/home')}
            >
              <View className='bg-[#ffa629] p-2 rounded-lg my-6'>
                <Text className='text-center text-white text-xl'>
                  Login
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

export default signIn
