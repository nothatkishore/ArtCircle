import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import { Picker } from '@react-native-picker/picker';
import profile from '../../../assets/icons/photo.png'

//  Form validation
//  API requests

const addMovies = () => {

    const [form, setform] = useState(
        {
            artistId: '',
            artistName: '',
            projectName: '',
            projecType: '',
            designation: '',
            productionName: '',
            producerName: '',
            directorName: '',
            salary: '',
        })

    const handlePress = () => {
        console.log(form)
    }

    return (
        <SafeAreaView className='bg-[#f0f3f6] h-full w-full'>
            <Header />
            <Text className='text-white m-4 p-2 rounded-lg text-center text-xl font-light bg-gray-700'>
                Add new project (Admin)
            </Text>
            <ScrollView className='h-full w-full'>

                <View className='m-3'>
                    <Text className='text-black'>Member id:</Text>
                    <View className='mt-2 bg-gray-50 rounded-xl border'>
                        <TextInput
                            className='p-3'
                            placeholder='Member Id'
                            value={form.artistId}
                            onChangeText={(value) => setform({ ...form, artistId: value })}
                            keyboardType='numeric'
                        />
                    </View>
                </View>

                <View className='m-3'>
                    <Text className='text-black'>Member name:</Text>
                    <View className='mt-2 bg-gray-50 rounded-xl border'>
                        <TextInput
                            className='p-3'
                            placeholder='Member name'
                            value={form.artistName}
                            onChangeText={(value) => setform({ ...form, artistName: value })}
                        />
                    </View>
                </View>

                <View className='m-3'>
                    <Text className='text-black'>Project name:</Text>
                    <View className='mt-2 bg-gray-50 rounded-xl border'>
                        <TextInput
                            className='p-3'
                            placeholder='Project name'
                            value={form.projectName}
                            onChangeText={(value) => setform({ ...form, projectName: value })}
                        />
                    </View>
                </View>

                <View className='m-3'>
                    <Text className='text-black'>Project type:</Text>
                    <View className='bg-white rounded-xl mt-2 border'>
                        <Picker
                            selectedValue={form.projecType}
                            onValueChange={(value, index) => setform({ ...form, projecType: value })}
                        >
                            <Picker.Item label="Advertisement" value="Advertisement" />
                            <Picker.Item label="Cinema" value="Cinema" />
                            <Picker.Item label="Series" value="Series" />
                            <Picker.Item label="Others" value="Others" />
                        </Picker>
                    </View>
                </View>

                <View className='m-3'>
                    <Text className='text-black'>Designation:</Text>
                    <View className='bg-white rounded-xl mt-2 border'>
                        <Picker
                            selectedValue={form.designation}
                            onValueChange={(value, index) => setform({ ...form, designation: value })}
                        >
                            <Picker.Item label="Technician" value="Technician" />
                            <Picker.Item label="Asst.Director" value="Asst.Director" />
                            <Picker.Item label="Director" value="Director" />
                        </Picker>
                    </View>
                </View>

                <View className='m-3'>
                    <Text className='text-black'>Production House:</Text>
                    <View className='mt-2 bg-gray-50 rounded-xl border'>
                        <TextInput
                            className='p-3'
                            placeholder='Production name'
                            value={form.productionName}
                            onChangeText={(value) => setform({ ...form, productionName: value })}
                        />
                    </View>
                </View>

                <View className='m-3'>
                    <Text className='text-black'>Director name:</Text>
                    <View className='mt-2 bg-gray-50 rounded-xl border'>
                        <TextInput
                            className='p-3'
                            placeholder='Director name'
                            value={form.directorName}
                            onChangeText={(value) => setform({ ...form, directorName: value })}
                        />
                    </View>
                </View>

                <View className='m-3'>
                    <Text className='text-black'>Salary:</Text>
                    <View className='mt-2 bg-gray-50 rounded-xl border'>
                        <TextInput
                            className='p-3'
                            placeholder='Salary'
                            keyboardType='numeric'
                            value={form.salary}
                            onChangeText={(value) => setform({ ...form, salary: value })}
                        />
                    </View>
                </View>

                <View className='my-10 bg-orange-600 mx-3 p-3 rounded-lg'>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={handlePress}
                    >
                        <Text className='text-white text-base text-center'>
                            Add Project
                        </Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}


export default addMovies