import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import profilePic from '../../assets/icons/user.png'

const profile = () => {

    const [form, setform] = useState({
        profile: null,
        username: 'Stacksnova',
        designation: 'Art director',
        contact: '',
        econtact: '',
        email: '',
        pAddress: '',
        rAddress: ''
    })

    const [edit, setedit] = useState(false)

    return (
        <SafeAreaView className='flex-1 bg-slate-100'>
            <ScrollView className='px-5 py-7'>

                <View className='bg-white p-3 mb-7 rounded-lg shadow-2xl'>
                    <Text className='text-lg text-center text-gray-700'>Member profile</Text>
                    {
                        edit &&
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => setedit(false)}
                        >
                            <View className='bg-green-500 p-2 rounded-lg mt-2'>
                                <Text className='text-white text-center'>Save changes</Text>
                            </View>
                        </TouchableOpacity>
                    }
                </View>

                <View className='bg-white p-7 flex-row justify-around rounded-lg'>

                    {/* Profile picture */}
                    <View className='w-auto p-2 justify-center items-center'>
                        <Image
                            source={profilePic}
                            className='h-24 w-24'
                        />
                        <Text className='text-lg'>{form.username}</Text>
                        <Text className='text-sm'>{form.designation}</Text>
                        {
                            edit &&
                            <>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                >
                                    <View className='bg-slate-200 p-2 rounded-lg mt-2'>
                                        <Text className='text-slate-700'>Change photo</Text>
                                    </View>
                                </TouchableOpacity>


                            </>
                        }
                    </View>

                    {/* Side buttons */}
                    {
                        !edit &&
                        <View className='p-2 justify-center gap-2'>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => setedit(true)}
                            >
                                <View className='bg-blue-500 py-3 rounded-xl'>
                                    <Text className='text-white text-xs text-center'>Edit</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.7}
                            >
                                <View className='bg-green-500 py-3 px-3 rounded-xl'>
                                    <Text className='text-white text-xs text-center'>Change password</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.7}
                            >
                                <View className='bg-red-500 py-3 px-3 rounded-xl text-center'>
                                    <Text className='text-white text-xs text-center'>Logout</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }

                </View>


            </ScrollView>
            <StatusBar style='light' backgroundColor='#ffa629' />
        </SafeAreaView>
    )
}

export default profile