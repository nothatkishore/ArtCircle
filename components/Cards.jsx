import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import placeHolder from '../assets/images/placeHolder.jpg'
import { Link } from 'expo-router'


const Cards = ({ image, BigText, SmallText, xSmallText, PATH, flag, ExPATH }) => {
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
                        <Link
                            href={ExPATH || ''}
                            className='mt-4 text-gray-200 font-semibold text-[12px] bg-slate-700 p-2 rounded-lg w-4/5 text-center'
                        >
                            {xSmallText || ''}
                        </Link>
                    </View>

                    {
                        flag ?

                            <View className='w-1/2 h-full items-end'>
                                <Image
                                    source={image || placeHolder}
                                    className='h-[120px] w-[120px] rounded-md'
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