import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'

const SearchBar = ({url, placeholder, icon, data}) => 
{
  const [search, setsearch] = useState('')

  return (
    <View className='bg-gray-100 mx-5 p-2 rounded-lg flex-row items-center'>
      <TextInput 
        value={search}
        onChangeText={(text) => setsearch(text)}
        placeholder={placeholder}
        className='text-base w-11/12'
      />

      <TouchableOpacity
        activeOpacity={0.8}
      >
        <Image 
          source={icon}
          className='h-6 w-6'
        />
      </TouchableOpacity>

    </View>
  )
}

export default SearchBar