import { View, Text, FlatList, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import Cards from '../../../components/Cards'
import searchButton from '../../../assets/icons/find-store.png'

const searchProducts = () => {
  const data = [{ name: "Apple", role: "Store name" }, { name: "Ball", role: "Store Name" }, { name: "Cat", role: "Store Name" }, { name: "Dog", role: "Store Name" }, { name: "Elephant", role: "Store Name" }, { name: "Fruits", role: "Store Name" }, { name: "Hen", role: "Store Name" }, { name: "Product Name", role: "Store Name" }]
  const renderItems = ({ item }) => (
    <Cards
      BigText={item.role}
      SmallText={item.name}
      xSmallText='Location link'
      PATH='productDetails'
      flag={true}
    />
  )

  const [search, setSearch] = useState('')
  const [filterData, setFilteredData] = useState(data)

  const handleSearch = (text) => {
    setSearch(text)
    const NewData = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
    setFilteredData(NewData)
  }


  return (
    <SafeAreaView className='bg-[#f0f3f6] h-full w-full'>
      <Header />
      <View className='bg-gray-50 shadow-lg m-5 p-2 rounded-lg flex-row items-center'>
        <TextInput
          value={search}
          placeholder='Enter search location'
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

export default searchProducts
