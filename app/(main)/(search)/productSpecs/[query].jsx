import { View, Text, Image, FlatList, TouchableOpacity, Modal } from 'react-native';
import { React, useState } from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/Header';
import { useLocalSearchParams } from 'expo-router';
import picture1 from '../../../../placeholder/Products/AK117.jpeg'
import picture2 from '../../../../placeholder/Products/bike_engine.jpg'
import picture3 from '../../../../placeholder/Products/sniper.jpeg'
import picture4 from '../../../../placeholder/Products/M4A1.jpeg'
import picture5 from '../../../../placeholder/Products/pistol.jpg'


const ProductDetails = () => {
    const { query } = useLocalSearchParams()
    //use this query keyword to make a API request

    // Product details
    const productData = { fullAddress : '', Contact : '', Price : '', Description : '', locationLink : '' }

    const data = [
        { id: 1, image: picture1, location: 'https://www.google.com/maps/search/google+maps+link/@13.0612987,80.2258942,12z/data=!3m1!4b1?entry=ttu' },
        { id: 2, image: picture2 },
        { id: 3, image: picture3 },
        { id: 4, image: picture4 },
        { id: 5, image: picture5 },
        { id: 6, image: picture1 },
        { id: 7, image: picture2 },
        { id: 8, image: picture3 },
        { id: 9, image: picture4 },
        { id: 10, image: picture5 },
        { id: 11, image: picture1 },
        { id: 12, image: picture2 }
    ];  //While constructing API send location details with first object alone.

    const [modalVisible, setModalVisible] = useState(false);
    const [selImage, setSelImage] = useState(null);

    const handlePress = (image) => {
        setSelImage(image);
        setModalVisible(true);
    };

    const renderItems = ({ item }) => (
        <TouchableOpacity
            className='flex flex-1 justify-center items-center flex-row bg-slate-200 h-[200px] rounded-2xl'
            activeOpacity={0.8}
            onPress={() => handlePress(item.image)}
        >
            <Image
                source={item.image}
                className='h-full w-full rounded-2xl'
                resizeMode='cover'
            />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f3f6' }}>
            <Header />

            <View className='bg-slate-50 rounded-xl shadow-2xl p-2 m-4'>
                <Text className='text-2xl font-normal text-center'>
                    {query}
                </Text>
            </View>

            <FlatList
                data={data}
                numColumns={2}
                columnWrapperStyle={{ gap: 7, paddingHorizontal: 10 }}
                contentContainerStyle={{ gap: 7, paddingBottom: 20 }}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={renderItems}
                ListHeaderComponent={() => (
                    <>
                        <View className='bg-slate-50 rounded-xl shadow-2xl p-5 m-4 h-auto'>
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
                                <Text className='text-[15px] font-medium'>Price / Rent :
                                    <Text className='font-normal text-[14px]'> Rs. 2,500 /- per hour maximum use of 3 days. Late issues will be fined. </Text>
                                </Text>
                                <Text className='text-[15px] font-medium'>Website link :
                                    <Text className='font-normal text-[14px]'> link@storename </Text>
                                </Text>
                                <Text className='text-[15px] font-medium'>Stocks available :
                                    <Text className='font-normal text-[14px]'> 4  </Text>
                                </Text>
                                <Text className='text-[15px] font-medium'>Description :
                                    <Text className='font-normal'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deleniti amet magnam earum ipsam atque commodi, totam sint quibusdam fugiat. Dolores, ipsa quam? Accusantium aliquid voluptates sunt officia? Atque, aut. </Text>
                                </Text>
                            </View>

                            <View className='mt-4 items-center justify-center'>
                                <Link
                                    href={data[0].location || ''}
                                >
                                    <View className='bg-slate-700 items-center justify-center p-3 mt-4 rounded-xl'>
                                        <Text className='text-gray-100 text-[12px]'>
                                            View on maps 🧭
                                        </Text>
                                    </View>
                                </Link>
                            </View>
                        </View>
                        <View className='bg-slate-50 rounded-xl shadow-xl p-2 m-4'>
                            <Text className='text-xl font-normal text-center'>
                                {query} pictures
                            </Text>
                        </View>

                    </>
                )}
            />

            {selImage && (
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View
                        className='w-full h-full justify-center'
                        style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
                    >
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => setModalVisible(false)}
                        >
                            <View className='justify-center'>
                                <View className='justify-center items-center'>
                                    <Image
                                        source={selImage}
                                        className='w-11/12 h-11/12 rounded-2xl'
                                        resizeMode='contain'
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>
            )}
        </SafeAreaView>
    );
};

export default ProductDetails;
