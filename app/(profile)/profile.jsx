import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import placeHolder from '../../assets/icons/user.png'
import { Picker } from '@react-native-picker/picker'
import { StatusBar } from 'expo-status-bar'
import * as ImagePicker from 'expo-image-picker'
import { useSelector, useDispatch } from 'react-redux'
import { setProfile, setName, setDesignation } from '../../redux/slices/userSlice' 

const profile = () => {

    const profile = useSelector((state) => state.user.profile)
    const dispatch = useDispatch()

    const handlePress = async () =>
    {
        if(!edit)
            return
        
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(permissionResult.granted === false)
        {
            alert('Permission to access gallery is required!')
            return
        }

        const result = await ImagePicker.launchImageLibraryAsync(
        {
            mediaTypes : ImagePicker.MediaTypeOptions.Images,
            allowsEditing : true,
            aspect : [4, 3],
            quality : 1,
        })

        if(!result.canceled){
            dispatch(setProfile(result.assets[0].uri))
        }
    }

    //Make a request to get these details
    const [form, setForm] = useState(
        {
            profile: placeHolder,
            name: 'Stacksnova',
            email: 'artdirectorsgang@gmail.com',
            designation: 'Director',
            contact: '9840287145'
        })

    useEffect(() =>
    {   
        dispatch(setName(form.name))
        dispatch(setDesignation(form.designation))
    }, [form])


    const [edit, setEdit] = useState(false)

    return (
        <SafeAreaView className='bg-[#f0f3f6] h-full w-full'>

            <View className='h-1/3 w-full items-center justify-center'>
                <TouchableOpacity
                    activeOpacity={ edit ? 0.8 : 1}
                    onPress={handlePress}
                >
                    <View className={edit && 'bg-white p-2 rounded-full'}>
                        <Image
                            source={profile ? { uri : profile } : placeHolder}
                            className='h-24 w-24 rounded-full '
                            resizeMode='cover'
                        />

                        {edit && <Text className='text-center'>Change</Text>}
                        
                    </View>
                </TouchableOpacity>
                <Text className='mt-2 text-2xl font-light'>{form.name}</Text>
                <Text className='mt-1 text-lg font-light'>{form.designation}</Text>
            </View>

            <View className='h-2/3 w-full items-center p-10'>

                {/* Picker */}
                <View className='bg-slate-50 w-full rounded-lg m-3'>
                    <Picker
                        selectedValue={form.designation}
                        onValueChange={(text) => setForm({ ...form, designation: text })
}
                        enabled={edit}
                    >
                        <Picker.Item label="Technician" value="Technician" />
                        <Picker.Item label="Asst.Director" value="Asst.Director" />
                        <Picker.Item label="Director" value="Director" />
                    </Picker>
                </View>

                {/* Email address */}
                <View className='border-b border-black w-full rounded-lg m-3'>
                    <TextInput
                        placeholder='Email Address'
                        value={form.email}
                        onChangeText={(text) => setForm({ ...form, email: text })}
                        className='p-2'
                        editable={edit}
                    />
                </View>

                <View className='border-b border-black space-y-0 w-full rounded-lg m-3'>
                    <TextInput
                        placeholder='Phone number'
                        value={form.contact}
                        onChangeText={(text) => setForm({ ...form, contact: text })}
                        className='p-2'
                        editable={edit}
                    />
                </View>

                <TouchableOpacity
                    activeOpacity={0.8}
                    className='w-full'
                    onPress={() => setEdit(!edit)}
                >
                    <View className='m-3 rounded-lg bg-[#ffa629]'>
                        <Text className='p-3 text-white text-base font-medium text-center'>
                            {edit ? 'Save changes' : 'Edit profile'}
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    className='w-full'
                >
                    <View className='rounded-lg w-full'>
                        <Text className='p-3 text-blue-600 text-sm font-medium text-center'>
                            Change Password
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>

            <StatusBar style='light' backgroundColor='#ffa629' />

        </SafeAreaView>
    )
}

export default profile
