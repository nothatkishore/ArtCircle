import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import SearchBar from '../../../components/SearchBar'
import Card from '../../../components/Card'
import search from '../../../assets/icons/searchLocation.png'

const searchLocation = () => 
{
  const data = [{ name : "Spot Name", role : "Location" }, { name : "Spot Name can be long too", role : "Location" }, { name : "Spot Name can be long too", role : "Location" }, { name : "Spot Name can be long too", role : "Location" }, { name : "Spot Name can be long too", role : "Location" }, { name : "Spot Name can be long too", role : "Location" }, { name : "Spot Name can be long too", role : "Location" }, { name : "Spot Name can be long too", role : "Location" }]
  const renderItems = ({ item }) => (
    <Card 
      BigText = {item.name}
      SmallText = {item.role}
      xSmallText='Location link'
      PATH='spotDetails'
    />
  )

  return (
    <SafeAreaView className='bg-[#f0f3f6] h-full w-full'>
      <Header />
      <SearchBar 
        icon={search}
        placeholder='Search location'
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

export default searchLocation
