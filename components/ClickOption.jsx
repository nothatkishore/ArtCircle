import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ClickOption = ({ name, handlePress, icon }) => {
    return (

        <TouchableOpacity
            activeOpacity={0.8}
            onPress={handlePress}
        >
            <View className='p-4 rounded-xl border border-[#FFA001] flex-col justify-center items-center'>

                    <Image 
                        source = {icon}
                        resizeMode='contain'
                        className='h-[50px] w-[50px]'
                    />

                    <Text className='text-lg font-light text-white text-center'>{name}</Text>                
            </View>
        </TouchableOpacity>

    )
}

export default ClickOption