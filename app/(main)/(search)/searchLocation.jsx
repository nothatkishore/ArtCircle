import { View, Text, FlatList, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import Cards from '../../../components/Cards'
import searchButton from '../../../assets/icons/searchLocation.png'

const searchLocation = () => {
  //Make an API request to Backend and store the elements in data

  /* 
    { 
      spotName : 'Palace', 
      locationName : 'Pallavaram, Chennai, TN', 
      Image : 'Image link in DB', 
      locationLink : 'Maps Link'
    }
  */
 
  const data = [{ name: "Kishore", role: "Location" }, { name: "Spot Name can be long too", role: "Location" }, { name: "Spot Name can be long too", role: "Location" }, { name: "Spot Name can be long too", role: "Location" }, { name: "Spot Name can be long too", role: "Location" }, { name: "Spot Name can be long too", role: "Location" }, { name: "Spot Name can be long too", role: "Location" }, { name: "Spot Name can be long too", role: "Location" }]
  const renderItems = ({ item }) => (
    <Cards
      BigText={item.name}
      SmallText={item.role}
      xSmallText='Location link'
      PATH='spotDetails'
      flag={true}
    // image={item.image}
    />
  )

  const [search, setsearch] = useState('')
  const [filterData, setFilteredData] = useState(data)

  const handleSearch = (text) =>
  {
    setsearch(text)
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
        className='m-4'
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default searchLocation
