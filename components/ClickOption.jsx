import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ClickOption = ({ name, handlePress, icon }) => {
    return (

        <TouchableOpacity
            activeOpacity={0.8}
            onPress={handlePress}
        >
            <View className='mx-5 my-3 p-5 px-6 shadow-2xl shadow-[#ffa629] bg-gray-50 rounded-xl flex-row items-center'>

                    <View className='justify-start'>
                        <Image 
                            source = {icon}
                            resizeMode='contain'
                            className='h-[40px] w-[40px]'
                        />
                    </View>

                    <View className='justify-start flex-1 px-5'>
                        <Text className='text-lg font-light text-black'>{name}</Text> 
                    </View>               
            </View>
        </TouchableOpacity>

    )
}

export default ClickOption