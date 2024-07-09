import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import Header from '../../../components/Header'
import ClickOption from '../../../components/ClickOption'
import addM from '../../../assets/icons/addM.png'
import movie from '../../../assets/icons/movie.png'
import setP from '../../../assets/icons/setP.png'
import write from '../../../assets/icons/write.png'


const create = () => {
  return (
    <>
      <SafeAreaView className='bg-[#f0f3f6] h-full w-full'>
        <Header />
        <ScrollView className='h-full w-full'>
          <View className='h-full w-full mt-7'>

            <ClickOption
              name='Add Members (Admin)'
              icon={addM}
              handlePress={() => router.push('/addMember')}
            />

            <ClickOption
              name='Add Project'
              icon={movie}
              handlePress={() => router.push('/addMovies')}
            />

            <ClickOption
              name='Add Project (Admin)'
              icon={movie}
              handlePress={() => router.push('/addMoviesAdmin')}
            />

            <ClickOption
              name='Post Pictures'
              icon={setP}
              handlePress={() => router.push('/addSetprops')}
            />

            <ClickOption
              name='Post Pictures (Admin)'
              icon={setP}
              handlePress={() => router.push('/addSetpropsAdmin')}
            />


          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style='light' backgroundColor='#ffa629' />
    </>
  )
}

export default create