import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, Alert, FlatList } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import { Picker } from '@react-native-picker/picker';
import profile from '../../../assets/icons/photo.png'
import * as ImagePicker from 'expo-image-picker'
import City from '../../../assets/JSON/inCity.json'
import State from '../../../assets/JSON/inState.json'


const addLocationAdmin = () => {

  const [form, setform] = useState(
    {
      placeName: '',
      setImage: [],
      city: '',
      state: '',
      locationLink: '',
      fullAddress: '',
      contact: '',
      descritption: ''
    })



  const state = State

  const city = City.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const handlePost = () => {
    // post request
    console.log(form)
  }

  const handlePress = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Media access required from device to pick a photo')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setform((prev) => ({ ...prev, setImage: [...prev.setImage, result.assets[0].uri] }))
    }
  }

  const removeItem = (index) => {
    const newImage = form.setImage.filter((_, i) => i !== index)
    setform((prev) => ({ ...prev, setImage: newImage }))
  }

  return (
    <SafeAreaView className='bg-[#f0f3f6] h-full w-full'>
      <Header />
      <Text className='text-white m-4 p-2 rounded-lg text-center text-xl font-light bg-gray-700'>
        Add new location
      </Text>
      <ScrollView>
        {/* Place name */}
        <View className='m-3'>
          <Text className='text-black'>place name:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='place name'
              value={form.placeName}
              onChangeText={(value) => setform({ ...form, placeName: value })}
            />
          </View>
        </View>

        {/* State of the location */}
        <View className='m-3'>
          <Text className='text-black'>State:</Text>
          <View className='bg-white rounded-xl mt-2 border'>
            <Picker
              selectedValue={form.state}
              onValueChange={(value, index) => setform({ ...form, state: value })}
            >
              {
                state.map((value) => (
                  <Picker.Item key={value.id} label={value.name} value={value.name} />
                ))
              }
            </Picker>
          </View>
        </View>

        {/* City of the location */}
        <View className='m-3'>
          <Text className='text-black'>City:</Text>
          <View className='bg-white rounded-xl mt-2 border'>
            <Picker
              selectedValue={form.city}
              onValueChange={(value, index) => setform({ ...form, city: value })}
            >
              {city
                .filter((value) => value.state_name === form.state)
                .map((value) => (
                  <Picker.Item key={value.id} label={value.name} value={value.name} />
                ))}
            </Picker>
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
              placeholder='location link'
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

        {/* Description */}
        <View className='m-3'>
          <Text className='text-black'>Description:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='Description'
              numberOfLines={5}
              multiline={true}
              style={{ textAlignVertical: 'top' }}
              value={form.descritption}
              onChangeText={(value) => setform({ ...form, descritption: value })}
            />
          </View>
        </View>

        {/* Upload pictures */}
        <View className='h-full w-full'>

          <View className='m-3'>
            <Text className='text-black'>Upload pictures</Text>
            <View className='mt-2 border p-4 rounded-lg justify-center'>

              <ScrollView
                horizontal
                overScrollMode='always'
              >
                {
                  form.setImage.map((item, index) =>
                  (
                    <TouchableOpacity
                      key={index}
                      onPress={() => removeItem(index)} //remove
                    >
                      <Image
                        source={{ uri: item }}
                        className='w-24 h-24 mx-1'
                        resizeMode='contain'
                      />
                    </TouchableOpacity>
                  ))
                }
              </ScrollView>
              <Text className='text-center my-7'>images : {form.setImage.length} </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handlePress}
              >
                <View className='justify-center items-center bg-sky-300 p-2 flex-row rounded-xl shadow-2xl'>
                  <Image
                    source={profile}
                    className='h-10 w-10 mx-2'
                    resizeMode='contain'
                  />
                  <Text className='text-white font-bold'>Add Pictures</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View className='my-10 bg-orange-600 mx-3 p-3 rounded-xl'>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handlePost}
            >
              <Text className='text-white text-center text-base'>
                Add location
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default addLocationAdmin
