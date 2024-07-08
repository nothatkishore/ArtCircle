import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import warning from '../assets/icons/warning.png'

const PaymentCard = ({ bigText, smallText, xsmallText }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
        >
            <View className='bg-slate-50 p-4 rounded-xl shadow-2xl my-2 flex-row justify-around items-center'>

                <View className='w-1/5 items-center '>

                    <Image
                        source={warning}
                        className='h-10 w-10'
                    />

                </View>

                <View className='w-4/5 items-center space-y-2'>
                    <View>
                        <Text className='text-lg font-medium'>
                            Rs.{smallText} /-
                        </Text>
                    </View>
                    <View>
                        <Text className='text-sm'>
                            {bigText}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PaymentCard