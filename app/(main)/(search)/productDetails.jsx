import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import placeHolder from '../../../assets/images/placeHolder.jpg'

const productDetails = () => 
{

  const data = [ { id : 1, image : placeHolder }, { id : 2, image : placeHolder }, { id : 3, image : placeHolder }, { id : 4, image : placeHolder }, { id : 5, image : placeHolder }, { id : 6, image : placeHolder }, { id : 7, image : placeHolder } ]

  const renderItems = ( {items} ) =>
  (
      <View>
        <Image 
          source={placeHolder}
          className='h-[50px]'
        />
      </View>
  )

  return (
    
    <SafeAreaView>

      <Header />

      <FlatList
        data={data}
        renderItem={renderItems}
      />

    </SafeAreaView>

  )
}

export default productDetails