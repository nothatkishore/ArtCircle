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
        <>
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
        </>

    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f3f6' }}>
            <Header />

            <View className='bg-slate-50  rounded-xl shadow-2xl p-2 m-4'>
                <Text className='text-2xl font-normal text-center'>
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
                ListHeaderComponent={() =>
                (
                    <>
                        <View className='bg-slate-50 rounded-xl shadow-2xl p-5 m-4 h-auto space-y-1'>
                            <Text className='text-sm font-medium'>Find on maps :
                                <Text className='font-normal'> Location link</Text>
                            </Text>
                            <Text className='text-sm font-medium'>Active days :
                                <Text className='font-normal text-xs'> Mon, Tue, Wed, Thu, Fri, Sat and Sun </Text>
                            </Text>
                            <Text className='text-sm font-medium'>Active hours :
                                <Text className='font-normal'> 9:00 AM - 5:00 PM</Text>
                            </Text>
                            <Text className='text-sm font-medium'>Contact :
                                <Text className='font-normal'> +91 98989898901 </Text>
                            </Text>

                            <View className='bg-blue-200 p-3 mt-3 rounded-md'>
                                <Text className='text-sm font-medium'>Description :
                                    <Text className='font-normal'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deleniti amet magnam earum ipsam atque commodi, totam sint quibusdam fugiat. Dolores, ipsa quam? Accusantium aliquid voluptates sunt officia? Atque, aut. </Text>
                                </Text>
                            </View>

                        </View>

                        <View className='bg-gray-50 m-7 p-3 rounded-lg shadow-2xl shadow-blue-500'>
                            <Text className='text-center text-xl'>Images</Text>
                        </View>
                    </>
                )}
            />

        </SafeAreaView>
    );
};

export default ProductDetails;
