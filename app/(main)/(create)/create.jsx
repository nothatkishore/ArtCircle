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

const create = () => 
{
  return (
    <>
      <SafeAreaView className='bg-black h-full w-full'>

        <Header />

        <ScrollView className='h-full w-full'>

            <View>
              <ClickOption 
                name='Add Members'
                icon={addM}
                handlePress={() => router.push('/addMember')}
              />
            </View>

            <View>
              <ClickOption 
                name='Add Movies'
                icon={movie}
                handlePress={() => router.push('/addMovies')}
              />
            </View>

            <View>
              <ClickOption 
                name='Set Properties'
                icon={setP}
                handlePress={() => router.push('/addSetprops')}
              />
            </View>

            <View>
              <ClickOption 
                name='Write'
                icon={write}
                handlePress={() => router.push('/write')}
              />
            </View>

        </ScrollView>

      </SafeAreaView>
      <StatusBar style='light' />
    </>
  )
}

export default create