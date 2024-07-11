import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, Alert, FlatList } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import { Picker } from '@react-native-picker/picker';
import profile from '../../../assets/icons/photo.png'


const addStoreAdmin = () => {

  const [form, setform] = useState(
    {
      storename: '',
      fullAddress: '',
      locationLink: '',
      contact: '',
      email: '',
      webLink: ''
    })

  const handlePost = () => {
    // post request
    console.log(form)
  }

  return (
    <SafeAreaView className='bg-[#f0f3f6] h-full w-full'>
      <Header />
      <Text className='text-white m-4 p-2 rounded-lg text-center text-xl font-light bg-gray-700'>
        Add New Store
      </Text>
      <ScrollView>
        {/* Place name */}
        <View className='m-3'>
          <Text className='text-black'>Store name:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='Store name'
              value={form.storename}
              onChangeText={(value) => setform({ ...form, storename: value })}
            />
          </View>
        </View>

        {/* Full address */}
        <View className='m-3'>
          <Text className='text-black'>Full address:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='Full address'
              style={{ textAlignVertical: 'top' }}
              numberOfLines={5}
              multiline={true}
              value={form.fullAddress}
              onChangeText={(value) => setform({ ...form, fullAddress: value })}
            />
          </View>
        </View>

        {/* Location link */}
        <View className='m-3'>
          <Text className='text-black'>Location link:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='Location link'
              value={form.locationLink}
              onChangeText={(value) => setform({ ...form, locationLink: value })}
            />
          </View>
        </View>

        {/* Contact */}
        <View className='m-3'>
          <Text className='text-black'>Contact:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='Mobile number'
              inputMode='numeric'
              value={form.contact}
              onChangeText={(value) => setform({ ...form, contact: value })}
            />
          </View>
        </View>

        {/* E Mail address */}
        <View className='m-3'>
          <Text className='text-black'>Email address:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='Email address'
              inputMode='email'
              value={form.email}
              onChangeText={(value) => setform({ ...form, email: value })}
            />
          </View>
        </View>

        {/* Website link */}
        <View className='m-3'>
          <Text className='text-black'>Website link:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='Website link'
              value={form.webLink}
              onChangeText={(value) => setform({ ...form, webLink: value })}
            />
          </View>
        </View>

        <View className='my-10 bg-orange-600 mx-3 p-3 rounded-xl'>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handlePost}
          >
            <Text className='text-white text-center text-base'>
              Add New Store
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default addStoreAdmin



/* 
    Store name
    Full address
    Location link
    Contact
*/