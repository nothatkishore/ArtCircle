import { View, Text, ScrollView } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import Header from '../../../components/Header'
import ClickOption from '../../../components/ClickOption'
import addM from '../../../assets/icons/addM.png'
import movie from '../../../assets/icons/movie.png'
import setP from '../../../assets/icons/setP.png'
import addLocation from '../../../assets/icons/pin.png'
import addStore from '../../../assets/icons/store.png'
import addProduct from '../../../assets/icons/add-to-basket.png'



const create = () => {

  const [isAdmin, setisAdmin] = useState(true)
  return (
    <>
      <SafeAreaView className='bg-[#f0f3f6] h-full w-full'>
        <Header />
        <ScrollView className='h-full w-full'>
          <View className='h-full w-full my-7'>

            <ClickOption
              name='Add Project'
              icon={movie}
              handlePress={() => router.push('/addMovies')}
            />

            <ClickOption
              name='Add Pictures'
              icon={setP}
              handlePress={() => router.push('/addSetprops')}
            />

            {isAdmin &&

              <>
                <ClickOption
                  name='Add Members (Admin)'
                  icon={addM}
                  handlePress={() => router.push('/addMember')}
                />

                <ClickOption
                  name='Add Project (Admin)'
                  icon={movie}
                  handlePress={() => router.push('/addMoviesAdmin')}
                />

                <ClickOption
                  name='Add Pictures (Admin)'
                  icon={setP}
                  handlePress={() => router.push('/addSetpropsAdmin')}
                />

                <ClickOption
                  name='Add Location (Admin)'
                  icon={addLocation}
                  handlePress={() => router.push('/addLocationAdmin')}
                />

                <ClickOption
                  name='Add Store (Admin)'
                  icon={addStore}
                  handlePress={() => router.push('/addStoreAdmin')}
                />

                <ClickOption
                  name='Add Products (Admin)'
                  icon={addProduct}
                  handlePress={() => router.push('/addProductsAdmin')}
                />

              </>

            }

          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style='light' backgroundColor='#ffa629' />
    </>
  )
}

export default create