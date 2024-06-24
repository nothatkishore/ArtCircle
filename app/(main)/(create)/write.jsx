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
            yourData: ''
        })

    return (
        <SafeAreaView className='bg-black h-full w-full'>
            <Header />
            <Text className='text-white text-center text-2xl font-light pb-2'>
                Write content
            </Text>
            <ScrollView className='h-full w-full'>

                <View className='m-3'>
                    <Text className='text-white'>Movie name:</Text>
                    <View className='bg-white rounded-xl mt-2'>
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

                <View className='m-3'>
                    <Text className='text-white'>Write about your work:</Text>
                    <View className='mt-2 bg-gray-50 rounded-xl'>
                        <TextInput
                            className='p-2 text-left items-start'
                            style={{textAlignVertical : 'top'}}
                            placeholder='Write about your work'
                            value={form.yourData}
                            numberOfLines={8}
                            multiline={true}
                            onChangeText={(value) => setform({ ...form, yourData: value })}
                        />
                    </View>
                </View>


                <View className='my-10 bg-orange-600 mx-3 p-2 rounded-xl'>
                    <TouchableOpacity
                        activeOpacity={0.7}
                    >
                        <Text className='text-white text-center'>
                            Publish
                        </Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}


export default addMovies