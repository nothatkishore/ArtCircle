import { View, Text, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';
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
        <TouchableOpacity>
            
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f3f6' }}>
            <Header />
            <FlatList 
                data={data}
                numColumns={2}
                columnWrapperStyle={{ gap : 10, paddingHorizontal : 12 }}
                contentContainerStyle={{ gap : 10, paddingBottom : 20 }}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={renderItems}
            />
        </SafeAreaView>
    );
};

export default ProductDetails;
