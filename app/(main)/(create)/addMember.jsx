import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import { Picker } from '@react-native-picker/picker';
import profile from '../../../assets/icons/photo.png'

// Functionality
//  Image picker functionality
//  Form validation
//  API requests

const addMember = () => {

  const [form, setform] = useState(
    {
      profile: '',
      firstName: '',
      lastName: '',
      position: '',
      industry: '',
      phone: '',
      email: '',
      bloodGroup: '',
      aadhar: ''
    })

  return (
    <SafeAreaView className='bg-black h-full w-full'>
      <Header />
      <Text className='text-white text-center text-2xl font-light pb-2'>
        Add Member details
      </Text>
      <ScrollView className='h-full w-full'>
        <View className='m-3'>
          <Text className='text-white'>Profile picture</Text>
          <View className='mt-2 items-center'>
            <TouchableOpacity
              activeOpacity={0.7}
            >
              <Image
                source={profile}
                resizeMode='contain'
                className='h-20 w-20'
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className='m-3'>
          <Text className='text-white'>First name:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl'>
            <TextInput
              className='p-2'
              placeholder='First name'
              value={form.firstName}
              onChangeText={(value) => setform({ ...form, firstName: value })}
            />
          </View>
        </View>

        <View className='m-3'>
          <Text className='text-white'>Last name:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl'>
            <TextInput
              className='p-2'
              placeholder='Last name'
              value={form.lastName}
              onChangeText={(value) => setform({ ...form, lastName: value })}
            />
          </View>
        </View>

        <View className='m-3'>
          <Text className='text-white'>Position:</Text>
          <View className='bg-white rounded-xl mt-2'>
            <Picker
              selectedValue={form.position}
              onValueChange={(value, index) => setform({ ...form, position: value })}
            >
              <Picker.Item label="Technician" value="Technician" />
              <Picker.Item label="Asst.Director" value="Asst.Director" />
              <Picker.Item label="Director" value="Director" />
            </Picker>
          </View>
        </View>

        <View className='m-3'>
          <Text className='text-white'>Industry:</Text>
          <View className='bg-white rounded-xl mt-2'>
            <Picker
              selectedValue={form.industry}
              onValueChange={(value, index) => setform({ ...form, industry: value })}
            >
              <Picker.Item label="Advertisement" value="Advertisement" />
              <Picker.Item label="Cinema" value="Cinema" />
              <Picker.Item label="Series" value="Series" />
              <Picker.Item label="Others" value="Others" />
            </Picker>
          </View>
        </View>


        <View className='m-3'>
          <Text className='text-white'>Phone number:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl'>
            <TextInput
              className='p-2'
              placeholder='Phone number'
              keyboardType='numeric'
              value={form.phone}
              onChangeText={(value) => setform({ ...form, phone: value })}
            />
          </View>
        </View>

        <View className='m-3'>
          <Text className='text-white'>Email Address:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl'>
            <TextInput
              className='p-2'
              placeholder='Email address'
              value={form.email}
              onChangeText={(value) => setform({ ...form, email: value })}
            />
          </View>
        </View>

        <View className='m-3'>
          <Text className='text-white'>Blood group:</Text>
          <View className='bg-white rounded-xl mt-2'>
            <Picker
              selectedValue={form.bloodGroup}
              onValueChange={(value, index) => setform({ ...form, bloodGroup: value })}
            >
              <Picker.Item label="A +ve" value="A +ve" />
              <Picker.Item label="A -ve" value="A -ve" />
              <Picker.Item label="B +ve" value="B +ve" />
              <Picker.Item label="B -ve" value="B -ve" />
              <Picker.Item label="AB +ve" value="AB +ve" />
              <Picker.Item label="AB -ve" value="AB -ve" />
              <Picker.Item label="O +ve" value="O +ve" />
              <Picker.Item label="O -ve" value="O -ve" />
            </Picker>
          </View>
        </View>

        <View className='m-3'>
          <Text className='text-white'>Aadhar number:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl'>
            <TextInput
              className='p-2'
              placeholder='Aadhar number'
              value={form.aadhar}
              keyboardType='numeric'
              onChangeText={(value) => setform({ ...form, aadhar: value })}
            />
          </View>
        </View>

        <View className='my-10 bg-orange-600 mx-3 p-2 rounded-xl'>
          <TouchableOpacity
            activeOpacity={0.7}
          >
            <Text className='text-white text-center'>Add Member</Text>
          </TouchableOpacity>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}


export default addMember