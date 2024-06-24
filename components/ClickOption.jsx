import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ClickOption = ({ name, handlePress, icon }) => {
    return (

        <TouchableOpacity
            activeOpacity={0.8}
            onPress={handlePress}
        >
            <View className='m-5 p-5 rounded-xl border border-[#FFA001] flex-row justify-center items-center'>

                <View className='w-1/2 justify-center items-center'>
                    <Image 
                        source = {icon}
                        resizeMode='contain'
                        className='h-[30px] w-[30px] mr-4'
                    />
                </View>

                <View className='w-1/2 items-center'>
                    <Text className='text-lg font-light text-white'>{name}</Text>
                </View>
                
            </View>
        </TouchableOpacity>

    )
}

export default ClickOption