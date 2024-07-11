import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, Alert, FlatList } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import { Picker } from '@react-native-picker/picker';
import profile from '../../../assets/icons/photo.png'
import * as ImagePicker from 'expo-image-picker'
import City from '../../../assets/JSON/inCity.json'
import State from '../../../assets/JSON/inState.json'


const addProductsAdmin = () => {

  const [form, setform] = useState(
    {
      productName : '',
      productShop : '',
      productDescription : '',
      productCover : null,
      productImages : []
    })

  /*
    product name
    product shop name (drop down)
    product description
    product images
  */


  const handlePost = () => {
    // post request
    console.log(form)
  }

  const stores = [
    { id : 1, name : 'ratnam stores' },
    { id : 2, name : 'sample store name 1' },
    { id : 3, name : 'sample store name 2' },
    { id : 4, name : 'sample store name 3' },
    { id : 5, name : 'sample store name 4' },
    { id : 6, name : 'sample store name 5' },
  ]

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
        Add New Product
      </Text>
      <ScrollView>
        {/* Product name */}
        <View className='m-3'>
          <Text className='text-black'>Product name:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='Product name'
              value={form.productName}
              onChangeText={(value) => setform({ ...form, productName: value })}
            />
          </View>
        </View>

        <View className='m-3'>
          <Text className='text-black'>Product shop:</Text>
          <View className='bg-white rounded-xl mt-2 border'>
            <Picker
              selectedValue={form.productShop}
              onValueChange={(value, index) => setform({ ...form, productShop: value })}
            >
              {
                stores.map((value) => (
                  <Picker.Item key={value.id} label={value.name} value={value.name} />
                ))
              }
            </Picker>
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
              value={form.productDescription}
              onChangeText={(value) => setform({ ...form, productDescription: value })}
            />
          </View>
        </View>

        {/* Product pictures */}
        <View className='h-full w-full'>

          <View className='m-3'>
            <Text className='text-black'>Product pictures:</Text>
            <View className='mt-2 border p-4 rounded-lg justify-center'>

              <ScrollView
                horizontal
                overScrollMode='always'
              >
                {
                  form.productImages.map((item, index) =>
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
              <Text className='text-center my-7'>images : {form.productImages.length} </Text>
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
                Add Product
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default addProductsAdmin
