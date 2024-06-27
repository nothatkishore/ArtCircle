import { View, Text, Image, FlatList, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import sample from '../../../assets/images/placeHolder.jpg';
import Header from '../../../components/Header';

const ProductDetails = () => {
    const data = [
        { id: 1, description: 'Product Name', image: sample },
        { id: 2, description: 'Product Name', image: sample },
        { id: 3, description: 'Product Name', image: sample },
        { id: 4, description: 'Product Name', image: sample },
        { id: 5, description: 'Product Name', image: sample },
        { id: 6, description: 'Product Name', image: sample }
    ];

    const renderItems = ({ item }) =>
    (
        <View className='justify-start items-center'>
            <View className='w-screen justify-center items-center mx-2'>
                <Image
                    source={item.image}
                    className='w-full h-72'
                    resizeMode='cover'
                />
            </View>
        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f3f6' }}>
            <Header />
            <FlatList
                data={data}
                renderItem={renderItems}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                pagingEnabled
                contentContainerStyle={{ height : 300, justifyContent : 'center', alignItems : 'center' }}
                showsHorizontalScrollIndicator={false}
                snapToAlignment='center'
                decelerationRate='fast'
                className='m-4'
            />

            <View className='bg-gray-50 h-1/3 p-5 m-7 rounded-2xl shadow-2xl shadow-[#ffa629]'>
                <Text className='text-xl font-base '>About location:</Text>
                <Text>This space contains all the necessary information about the location</Text>
            </View>

        </SafeAreaView>
    );
};

export default ProductDetails;
