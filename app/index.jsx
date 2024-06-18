import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'


const index = () => 
{


    return (
        <>
            <SafeAreaView className='bg-black h-full items-center justify-center'>
                <Link href='/home'>
                    <Text className='text-white'>Click Me</Text>
                </Link>
            </SafeAreaView>
        </>
    )
}

export default index