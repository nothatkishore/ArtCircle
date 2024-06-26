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
      PATH='productDetails'
    />
  )

  return (
    <SafeAreaView className='bg-[#f0f3f6] h-full w-full'>
      <Header />
      <SearchBar 
        icon={search}
        placeholder='Search products'
        data={data}
      />

      <FlatList
        data={data}
        renderItem={renderItems}
        horizontal={false}
        decelerationRate='normal'
        className='mx-5'
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default searchProducts
