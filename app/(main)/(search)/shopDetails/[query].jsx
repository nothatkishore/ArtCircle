import { View, Text, FlatList, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../../components/Header'
import Cards from '../../../../components/Cards'
import searchButton from '../../../../assets/icons/find-store.png'
import picture1 from '../../../../placeholder/Products/AK117.jpeg'
import picture2 from '../../../../placeholder/Products/bike_engine.jpg'
import picture4 from '../../../../placeholder/Products/sniper.jpeg'
import picture5 from '../../../../placeholder/Products/M4A1.jpeg'
import { Link } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'



const shopDetails = () => {

  const { query } = useLocalSearchParams()

  const data = [
    { productName: 'AK117', shopName: 'Gun Shops', shopLocation: 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu', productImage: picture1 },
    { productName: 'M4A1', shopName: 'Besert Shop', shopLocation: 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu', productImage: picture2 },
    { productName: 'Dummy Knife', shopName: 'XYZ Shops', shopLocation: 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu', productImage: picture5 },
    { productName: 'Bike engine', shopName: 'locertk Shops', shopLocation: 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu', productImage: picture4 },
    { productName: 'Magic Stick', shopName: 'Mckid Shops', shopLocation: 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu', productImage: picture5 },
    { productName: 'Dummy Pistol', shopName: 'random12 Shops', shopLocation: 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu', productImage: picture1 },
    { productName: 'Dummy sniper', shopName: 'vercel Shops', shopLocation: 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu', productImage: picture2 }
  ]

  const renderItems = ({ item }) => (
    <Cards
      BigText={item.productName}
      SmallText={item.shopName}
      // xSmallText='🧭 View on Maps'
      ExPATH={item.shopLocation}
      PATH={`productSpecs/${item.productName}`}
      flag={true}
      image={item.productImage}
    />
  )

  const [search, setSearch] = useState('')
  const [filterData, setFilteredData] = useState(data)

  const handleSearch = (text) => {
    setSearch(text)
    const NewData = data.filter(item => item.productName.toLowerCase().includes(text.toLowerCase()))
    setFilteredData(NewData)
  }

  const headerComponent = () => (
    <>
      <View className='bg-slate-50 rounded-xl shadow-2xl p-5 my-2 h-auto'>
        <View className='space-y-3'>
          <Text className='text-[15px] font-medium'>Full Address :
            <Text className='font-normal'> addres of the mentioned Location goes here. It can be of any length.</Text>
          </Text>
          <Text className='text-[15px] font-medium'>Contact :
            <Text className='font-normal text-[14px]'> +91 123456789, 044 123456789, +91 980392352123 </Text>
          </Text>
          <Text className='text-[15px] font-medium'>E Mail :
            <Text className='font-normal text-[14px]'> sampleaddress@gmail.com </Text>
          </Text>
          <Text className='text-[15px] font-medium'>Website link :
            <Text className='font-normal text-[14px]'> link@storename </Text>
          </Text>

        </View>

        <View className='mt-4 items-center justify-center'>
          <Link
            href={data[0].shopLocation || ''}
          >
            <View className='bg-slate-700 items-center justify-center p-3 mt-4 rounded-xl'>
              <Text className='text-gray-100 text-[12px]'>
                View on maps 🧭
              </Text>
            </View>
          </Link>
        </View>
      </View>
    </>
  )

  return (
    <SafeAreaView className='bg-[#f0f3f6] h-full w-full'>
      <Header />
      <View className='bg-slate-50 rounded-xl shadow-xl p-2 m-4'>
        <Text className='text-xl font-normal text-center'>
          {query} pictures
        </Text>
      </View>
      <View className='bg-gray-50 shadow-lg mx-5 mb-3 p-2 rounded-lg flex-row items-center'>
        <TextInput
          value={search}
          placeholder='Search products'
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
        ListHeaderComponent={headerComponent}
      />
    </SafeAreaView>
  )
}

export default shopDetails
