import { View, Text, Image, FlatList, TouchableOpacity, Modal } from 'react-native';
import { React, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/Header';
import { useLocalSearchParams } from 'expo-router';
import picture1 from '../../../../placeholder/Location/beach.jpg'
import picture2 from '../../../../placeholder/Location/beach2.jpg'
import picture3 from '../../../../placeholder/Location/forest.jpg'
import picture4 from '../../../../placeholder/Location/forest2.jpg'
import picture5 from '../../../../placeholder/Location/palace2.jpg'


const spotDetails = () => {
    const { query } = useLocalSearchParams()
    console.log(query)
    //use this query keyword to make a API request

    const data = [
        { id: 1, image: picture1 },
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
    ];

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

                            <View className='bg-blue-200 p-3 my-3 rounded-md'>
                                <Text className='text-sm font-medium'>Description :
                                    <Text className='font-normal'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deleniti amet magnam earum ipsam atque commodi, totam sint quibusdam fugiat. Dolores, ipsa quam? Accusantium aliquid voluptates sunt officia? Atque, aut. </Text>
                                </Text>
                            </View>
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

export default spotDetails;
