import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import placeHolder from '../assets/images/placeHolder.jpg'


const Cards = ({ image, BigText, SmallText, xSmallText, PATH, flag }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push(`/${PATH}`)}
        >
            <View className='rounded-lg'>
                <View className='p-5 w-full rounded-xl my-2 bg-slate-50 shadow-lg shadow-orange-400  flex-row justify-between items-center'>
                    <View className={`${flag ? 'w-1/2' : 'w-full p-2'}`}>
                        <Text className='text-xl text-black font-semibold'>{BigText || 'Chennai'}</Text>
                        <Text className='text-base font-light text-black'>{SmallText || 'Location'}</Text>
                        <Text className='text-sm font-light text-black'>{xSmallText || ''}</Text>
                    </View>

                    {
                        flag ?

                            <View className='w-1/2 h-full items-end'>
                                <Image
                                    source={image || placeHolder}
                                    className='h-[120px] w-[120px] rounded-full'
                                    resizeMode='cover'
                                />
                            </View>

                            :

                            <>
                            </>
                    }


                </View>

            </View>
        </TouchableOpacity>
    )
}

export default Cards