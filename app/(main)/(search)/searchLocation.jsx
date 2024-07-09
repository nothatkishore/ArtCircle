import { View, Text, FlatList, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import Cards from '../../../components/Cards'
import searchButton from '../../../assets/icons/searchLocation.png'
import picture1 from '../../../placeholder/Location/beach.jpg'
import picture2 from '../../../placeholder/Location/beach2.jpg'
import picture3 from '../../../placeholder/Location/forest.jpg'
import picture4 from '../../../placeholder/Location/forest2.jpg'
import picture5 from '../../../placeholder/Location/palace2.jpg'



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
 
  const data = 
  [
    { spotName : 'Palace', locationName : 'Pallavaram, Chennai, TN', SpotImage : picture1, locationLink : 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu' },
    { spotName : 'Beach', locationName : 'Marina, Chennai, TN', SpotImage : picture2, locationLink : 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu' },
    { spotName : 'Palace', locationName : 'Mysore, Karnataka', SpotImage : picture3, locationLink : 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu' },
    { spotName : 'Banglow', locationName : 'Guindy, Chennai, TN', SpotImage : picture2, locationLink : 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu' },
    { spotName : 'Haunted site', locationName : 'Demote colony, Chennai, TN', SpotImage : picture1, locationLink : 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu' },
    { spotName : 'Forest area', locationName : 'Nandavanam, Chennai, TN', SpotImage : picture2, locationLink : 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu' },
    { spotName : 'Water falls', locationName : 'Pallakad, Kerala', SpotImage : picture4, locationLink : 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu' },
    { spotName : 'Beach', locationName : 'Kochi, Kerala', SpotImage : picture1, locationLink : 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu' },
    { spotName : 'Forest area', locationName : 'Anna nagar, Chennai, TN', SpotImage : picture5, locationLink : 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu' }
  ]

  const renderItems = ({ item }) => (
    <Cards
      BigText={item.spotName}
      SmallText={item.locationName}
      xSmallText='🧭 View on maps'
      ExPATH={item.locationLink}
      PATH={`spotDetails/${item.spotName}`}
      flag={true}
      image={item.SpotImage}
    />
  )

  const [search, setsearch] = useState('')
  const [filterData, setFilteredData] = useState(data)

  const handleSearch = (text) =>
  {
    setsearch(text)
    const NewData = data.filter(item => item.spotName.toLowerCase().includes(text.toLowerCase()))
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
