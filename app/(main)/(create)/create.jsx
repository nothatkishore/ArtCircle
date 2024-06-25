import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import Header from '../../../components/Header'
import ClickOption from '../../../components/ClickOption'
import addM from '../../../assets/icons/addM.png'
import setP from '../../../assets/icons/setP.png'
import write from '../../../assets/icons/write.png'
import movie from '../../../assets/icons/movie.png'
import Card from '../../../components/Card'

const create = () => {
  return (
    <>
      <SafeAreaView className='bg-black h-full w-full'>

        <Header />
        <ScrollView>
        <View className='h-full w-full p-5'>

<Card
  BigText='Add Members'
  SmallText='You can new members'
  PATH='addMember'
/>

<Card
  BigText='Add Setproperties'
  SmallText='Post set pictures'
  PATH='addSetprops'
/>

<Card
  BigText='Add Project'
  SmallText='Tell us about your new movie'
  PATH='addMovies'
/>

<Card
  BigText='Publish post'
  SmallText='Write about your work'
  PATH='write'
/>

</View>

        </ScrollView>

       

      </SafeAreaView>
      <StatusBar style='light' />
    </>
  )
}

export default create