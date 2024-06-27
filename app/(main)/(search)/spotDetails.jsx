import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
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
        { id: 6, description: 'Product Name', image: sample },
        { id: 7, description: 'Product Name', image: sample },
        { id: 8, description: 'Product Name', image: sample },
        { id: 9, description: 'Product Name', image: sample },
        { id: 10, description: 'Product Name', image: sample },
        { id: 11, description: 'Product Name', image: sample },
        { id: 12, description: 'Product Name', image: sample }
    ];

    const renderItems = ({ item }) =>
    (
        <TouchableOpacity
            className='flex flex-1 justify-center items-center flex-row bg-slate-200 h-[200px] rounded-lg'
            activeOpacity={0.8}
        >
            <Image
                source={item.image}
                className='h-full w-full rounded-2xl'
                resizeMode='cover'
            />
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f3f6' }}>
            <Header />

            <View className='bg-slate-50  rounded-xl shadow-2xl p-2 m-4'>
                <Text className='text-2xl font-light  text-center'>
                    Location Name
                </Text>
            </View>

            <FlatList
                data={data}
                numColumns={2}
                columnWrapperStyle={{ gap: 10, paddingHorizontal: 10 }}
                contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={renderItems}
                ListFooterComponent={() =>
                (
                    <View className='bg-slate-50 rounded-xl shadow-2xl p-7 m-4'>
                        <Text className='text-lg font-light h-auto'>
                            This contains details of the above location such as permission, 
                            timings and other relavent deatils.
                        </Text>
                    </View>
                )}
            />

        </SafeAreaView>
    );
};

export default ProductDetails;
