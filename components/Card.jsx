import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import placeHolder from '../assets/images/placeHolder.jpg'
import { router } from 'expo-router'

const Card = ( {image, BigText, SmallText, xSmallText, PATH} ) => {
    return (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => router.push(`/${PATH}`)}
    >
        <View className='rounded-lg'>
            <ImageBackground
                source={image || placeHolder}
                className='mb-4'
                imageStyle={{borderRadius : 15, opacity : 0.4 }}
                resizeMode='cover'
            >
                <View className='p-5 w-fullrounded-xl'>
                    <Text className='text-2xl text-white font-semibold'>{BigText || 'Chennai'}</Text>
                    <Text className='text-lg font-light text-white'>{SmallText || 'Location'}</Text>
                    <Text className='text-sm font-light text-white'>{xSmallText || 'Description'}</Text>
                </View>
            </ImageBackground>
        </View>
    </TouchableOpacity>
    )
}

export default Card