import { View, Text, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import sample from '../../../../assets/images/placeHolder.jpg';
import Header from '../../../../components/Header';
import { router, useLocalSearchParams } from 'expo-router';

const ProductDetails = () => {
  const { query } = useLocalSearchParams()
  console.log(query)
  //Make a API request with query to get the data

  const data = [
    { id: 1, description: 'Product Name', image: sample },
    { id: 2, description: 'Product Name', image: sample },
    { id: 3, description: 'Product Name', image: sample },
    { id: 4, description: 'Product Name can of any length', image: sample },
    { id: 5, description: 'Product Name', image: sample },
    { id: 6, description: 'Product Name', image: sample }
  ];

  const renderItems = ({ item }) => (
    <TouchableOpacity
      onPress={() => router.push(`/productSpecs/${item.description}`)}
      activeOpacity={0.7}
    >
        <View className='mb-5 flex-row items-center p-4 h-48 bg-slate-50 shadow-2xl rounded-lg justify-around'>
        <View>
          <Image
            source={item.image}
            className='h-36 w-36 rounded-2xl'
            resizeMode='cover'
          />
        </View>
        <View className='h-36 w-36 ml-7'>
          <Text className='text-base mb-2 font-medium'>{item.description}</Text>
          <Text className='text-xs'>This is a sample description of the product. This contains detailed description of the product</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#f0f3f6]">
      <Header />
      <FlatList
        data={data}
        renderItem={renderItems}
        className='m-5'
      />
    </SafeAreaView>
  );
};

export default ProductDetails;
