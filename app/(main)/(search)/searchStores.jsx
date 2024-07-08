import { View, Text, FlatList, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import Cards from '../../../components/Cards'
import searchButton from '../../../assets/icons/find-store.png'
import picture1 from '../../../placeholder/Products/AK117.jpeg'
import picture2 from '../../../placeholder/Products/bike_engine.jpg'
import picture4 from '../../../placeholder/Products/sniper.jpeg'
import picture5 from '../../../placeholder/Products/M4A1.jpeg'



const searchProducts = () => {
  const data = [
    { productName: 'AK117', shopName: 'Gun Shops', shopLocation: 'chennai, TN', productImage: picture1 },
    { productName: 'M4A1', shopName: 'Besert Shop', shopLocation: 'chennai, TN', productImage: picture2 },
    { productName: 'Dummy Knife', shopName: 'XYZ Shops', shopLocation: 'chennai, TN', productImage: picture5 },
    { productName: 'Bike engine', shopName: 'locertk Shops', shopLocation: 'chennai, TN', productImage: picture4 },
    { productName: 'Magic Stick', shopName: 'Mckid Shops', shopLocation: 'chennai, TN', productImage: picture5 },
    { productName: 'Dummy Pistol', shopName: 'random12 Shops', shopLocation: 'chennai, TN', productImage: picture1 },
    { productName: 'Dummy sniper', shopName: 'vercel Shops', shopLocation: 'chennai, TN', productImage: picture2 }
  ]

  const renderItems = ({ item }) => (
    <Cards
      BigText={item.productName}
      SmallText={item.shopName}
      xSmallText={item.shopLocation}
      PATH={`productDetails/${item.shopName}`}
      flag={true}
      image={item.productImage}
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
