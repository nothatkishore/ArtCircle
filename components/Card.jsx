import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import placeHolder from '../assets/images/placeHolder.jpg'
import { router } from 'expo-router'

const Card = ({ image, BigText, SmallText, xSmallText, PATH }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push(`/${PATH}`)}
        >
            <View className='rounded-lg'>
                <View className='p-5 w-full rounded-xl border my-2'>
                    <Text className='text-2xl text-black font-semibold'>{BigText || 'Chennai'}</Text>
                    <Text className='text-lg font-light text-black'>{SmallText || 'Location'}</Text>
                    <Text className='text-sm font-light text-black'>{xSmallText || 'Description'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card