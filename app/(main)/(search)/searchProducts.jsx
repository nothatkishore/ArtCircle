import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import SearchBar from '../../../components/SearchBar'
import Card from '../../../components/Card'
import search from '../../../assets/icons/find-store.png'

const searchProducts = () => 
{
  const data = [{ name : "Kishore", role : "Software Engineer" }, { name : "John", role : "Doctor" }, { name : "John", role : "Doctor" }, { name : "John", role : "Doctor" }, { name : "John", role : "Doctor" }, { name : "John", role : "Doctor" }, { name : "John", role : "Doctor" }, { name : "John", role : "Doctor" }]
  const renderItems = ({ item }) => (
    <Card 
      BigText = {item.name}
      SmallText = {item.role}
      PATH='products'
    />
  )

  return (
    <SafeAreaView className='bg-black h-full w-full'>
      <Header />
      <View className='mb-2'>
        <Text className='text-white text-xl font-light text-center'>Find Shops</Text>
      </View>
      <SearchBar 
        icon={search}
        placeholder='Search shops'
        data={data}
      />

      <FlatList
        data={data}
        renderItem={renderItems}
        horizontal={false}
        decelerationRate='normal'
        className='m-4'
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default searchProducts
