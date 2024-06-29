import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import user from '../../assets/icons/user.png'
import setP from '../../assets/icons/setP.png'
import project from '../../assets/icons/project.png'
import publishPost from '../../assets/icons/publishPost.png'
import productDetails from '../../assets/icons/productDetails.png'
import map from '../../assets/icons/map.png'
import searchProducts from '../../assets/icons/searchProducts.png'
import spotDetails from '../../assets/icons/spotDetails.png'
import loan from '../../assets/icons/loan.png'
import renewal from '../../assets/icons/renewal.png'
import payments from '../../assets/icons/payments.png'
import { router } from "expo-router";
import { useState } from "react"; 

const more = () => 
{
  const [Visible, setVisible] = useState(true)
  return (
    <SafeAreaView className='h-full w-full'>
      <View className="w-full h-auto bg-[#ffa629]">
        <Text className="color-white text-left text-2xl p-4 font-base">
          More
        </Text>
      </View>
      <ScrollView>

        <TouchableOpacity
          onPress={() => router.push('/addMember')}
        >
          <View className="w-full  mt-4 flex-row justify-center items-center px-10  bg-white">
            <Image
              source={user}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-lg">
              Add Members</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/addSetprops')}
        >
          <View className="w-ful  mt-0.5 flex-row justify-center items-center px-10  bg-white">
            <Image
              source={setP}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-lg">
              Add Setproperties</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/addMovies')}
        >
          <View className="w-ful  mt-0.5 flex-row justify-center items-center px-10  bg-white">
            <Image
              source={project}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-lg">
              Add Project</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/write')}
        >
          <View className="w-ful  mt-0.5 flex-row justify-center items-center px-10  bg-white">
            <Image
              source={publishPost}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-lg">
              Publish Post</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/productDetails')}
        >
          <View className="w-ful  mt-5 flex-row justify-center items-center px-10  bg-white">
            <Image
              source={productDetails}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-lg">
              Product Details</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/searchLocation')}
        >
          <View className="w-ful  mt-0.5 flex-row justify-center items-center px-10  bg-white">
            <Image
              source={map}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-lg">
              Search Location</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/searchProducts')}
        >
          <View className="w-ful  mt-0.5 flex-row justify-center items-center px-10  bg-white">
            <Image
              source={searchProducts}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-lg">
              Search Products</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/spotDetails')}>
          <View className="w-ful  mt-0.5 flex-row justify-center items-center px-10  bg-white">
            <Image
              source={spotDetails}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-lg">
              Spot Details</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/loan')}
        >
          <View className="w-ful  mt-5 flex-row justify-center items-center px-10  bg-white">
            <Image
              source={loan}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-lg">
              Loan</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/membershipRenewal')}
        >
          <View className="w-ful  mt-0.5 flex-row justify-center items-center px-10  bg-white">
            <Image
              source={renewal}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-lg">
              Membership Renewal</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/workPayments')}
        >
          <View className="w-ful  mt-0.5 flex-row justify-center items-center px-10  bg-white">
            <Image
              source={payments}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-lg">
              Work Payments</Text>
          </View>
        </TouchableOpacity>


      </ScrollView>
    </SafeAreaView>
  );
};

export default more;
