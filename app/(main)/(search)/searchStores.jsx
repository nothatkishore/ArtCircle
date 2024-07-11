import { View, Text, FlatList, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import searchButton from '../../../assets/icons/find-store.png'
import { router, Link } from 'expo-router'

const searchStores = () => {
  const data = 
  [
    { id: 1, storeName: 'Blick Art Materials', fullAddress: '87/2,SambuPrasad Avenue,Arcot Road, Vadapalani, Chennai, Tamil Nadu 600026', contact: '123456789', locationLink: 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu' },
    { id: 2, storeName: 'Michaels', fullAddress: '87/2,SambuPrasad Avenue,Arcot Road, Vadapalani, Chennai, Tamil Nadu 600026', contact: '123456789', locationLink: 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu' },
    { id: 3, storeName: 'Hobby Lobby', fullAddress: '87/2,SambuPrasad Avenue,Arcot Road, Vadapalani, Chennai, Tamil Nadu 600026', contact: '123456789', locationLink: 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu' },
    { id: 4, storeName: 'Dick Blick', fullAddress: '87/2,SambuPrasad Avenue,Arcot Road, Vadapalani, Chennai, Tamil Nadu 600026', contact: '123456789', locationLink: 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu' },
    { id: 5, storeName: 'Pearl Paint', fullAddress: '87/2,SambuPrasad Avenue,Arcot Road, Vadapalani, Chennai, Tamil Nadu 600026', contact: '123456789', locationLink: 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu' },
    { id: 6, storeName: 'Art Supply Warehouse', fullAddress: '87/2,SambuPrasad Avenue,Arcot Road, Vadapalani, Chennai, Tamil Nadu 600026', contact: '123456789', locationLink: 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu' },
    { id: 7, storeName: 'Plaza Art', fullAddress: '87/2,SambuPrasad Avenue,Arcot Road, Vadapalani, Chennai, Tamil Nadu 600026', contact: '123456789', locationLink: 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu' },
    { id: 8, storeName: 'Da Vinci Art Supply', fullAddress: '87/2,SambuPrasad Avenue,Arcot Road, Vadapalani, Chennai, Tamil Nadu 600026', contact: '123456789', locationLink: 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu' }
  ]

  const renderItems = ({ item }) => (
    <View className='m-2 bg-white p-4 rounded-xl'>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => router.push(`/shopDetails/${item.storeName}`)}
      >
        <View className='my-2'>
          <Text className='text-lg'>{item.storeName}</Text>
        </View>
        <View className='my-2 space-y-1'>
          <Text className='font-medium'>Address:</Text>
          <Text>{item.fullAddress}</Text>
        </View>
      </TouchableOpacity>
      <View className=' items-center w-full'>
        <Link
          href={data[0].locationLink}
          className='mt-2'
        >
          <View className='my-2 bg-slate-700 w-full p-3 rounded-xl justify-center items-center'>
            <Text className='text-white text-center'>🧭 View on Maps</Text>
          </View>
        </Link>
      </View>
    </View>
  )

  const [search, setSearch] = useState('')
  const [filterData, setFilteredData] = useState(data)

  const handleSearch = (text) => {
    setSearch(text)
    const NewData = data.filter(item => item.storeName.toLowerCase().includes(text.toLowerCase()))
    setFilteredData(NewData)
  }


  return (
    <SafeAreaView className='bg-[#f0f3f6] h-full w-full'>
      <Header />
      <View className='bg-gray-50 shadow-lg m-5 p-2 rounded-lg flex-row items-center'>
        <TextInput
          value={search}
          placeholder='Search Stores'
          className='text-base w-11/12'
          onChangeText={(text) => handleSearch(text)}
        />

        <TouchableOpacity
          activeOpacity={0.8}
        >
          <Image
            source={searchButton}
            className='h-6 w-6'
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => router.push('/searchProduct')}
      >
        <View className='mx-5 mb-3 bg-slate-700 p-2 rounded-xl'>
          <Text className='text-white text-center'>Search by Product</Text>
        </View>
      </TouchableOpacity>

      <FlatList
        data={filterData}
        renderItem={renderItems}
        horizontal={false}
        decelerationRate='normal'
        className='mx-5'
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default searchStores
