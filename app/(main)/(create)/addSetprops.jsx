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

const addMovies = () => {

    const [form, setform] = useState(
        {
            movieName: '',
            setImage: ''
        })

    return (
        <SafeAreaView className='bg-[#f0f3f6] h-full w-full'>
            <Header />
            <Text className='text-black text-center text-2xl font-light pb-2'>
                Add Pictures
            </Text>
            <ScrollView className='h-full w-full'>

                <View className='m-3'>
                    <Text className='text-black'>Upload pictures</Text>
                    <View className='mt-2 items-center border p-4 rounded-lg'>
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
                    <Text className='text-black'>Movie name:</Text>
                    <View className='bg-white rounded-xl mt-2 border'>
                        <Picker
                            selectedValue={form.movieName}
                            onValueChange={(value, index) => setform({ ...form, movieName: value })}
                        >
                            <Picker.Item label="Advertisement" value="Advertisement" />
                            <Picker.Item label="Cinema" value="Cinema" />
                            <Picker.Item label="Series" value="Series" />
                            <Picker.Item label="Others" value="Others" />
                        </Picker>
                    </View>
                </View>


                <View className='my-10 bg-orange-600 mx-3 p-2 rounded-xl'>
                    <TouchableOpacity
                        activeOpacity={0.7}
                    >
                        <Text className='text-white text-center'>
                            Add Picture
                        </Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}


export default addMovies