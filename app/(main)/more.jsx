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
import { StatusBar } from "expo-status-bar";

const more = () => {
  const [Visible, setVisible] = useState(true)
  return (
    <SafeAreaView className='h-full w-full bg-[#f0f3f6]'>
      <View className="w-full h-auto bg-[#ffa629] rounded-b-md">
        <Text className="color-white text-left text-xl p-4 font-base">
          More
        </Text>
      </View>
      <StatusBar backgroundColor="#ffa629" style="light" />
      <ScrollView>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push('/addMember')}
        >
          <View className="mt-5 flex-row justify-center items-center px-10 rounded-lg mx-2 shadow-lg shadow-orange-400 bg-white">
            <Image
              source={user}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-base">
              Add Members</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push('/addSetprops')}
        >
          <View className="mt-1 flex-row justify-center items-center px-10 rounded-lg mx-2 shadow-lg shadow-orange-400 bg-white">
            <Image
              source={setP}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-base">
              Add Setproperties</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push('/addMovies')}
        >
          <View className="w-ful  mt-1 flex-row justify-center items-center px-10 rounded-lg mx-2 shadow-lg shadow-orange-400 bg-white">
            <Image
              source={project}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-base">
              Add Project</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push('/write')}
        >
          <View className="w-ful  mt-1 flex-row justify-center items-center px-10 rounded-lg mx-2 shadow-lg shadow-orange-400 bg-white">
            <Image
              source={publishPost}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-base">
              Publish Post</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push('/productDetails')}
        >
          <View className="w-full m-1 flex-row justify-center items-center px-10 rounded-lg mx-2 shadow-lg shadow-orange-400 bg-white">
            <Image
              source={productDetails}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-base">
              Product Details</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push('/searchLocation')}
        >
          <View className="w-ful  mt-1 flex-row justify-center items-center px-10 rounded-lg mx-2 shadow-lg shadow-orange-400 bg-white">
            <Image
              source={map}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-base">
              Search Location</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push('/searchProducts')}
        >
          <View className="w-ful  mt-1 flex-row justify-center items-center px-10 rounded-lg mx-2 shadow-lg shadow-orange-400 bg-white">
            <Image
              source={searchProducts}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-base">
              Search Products</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push('/spotDetails')}>
          <View className="w-ful  mt-1 flex-row justify-center items-center px-10 rounded-lg mx-2 shadow-lg shadow-orange-400 bg-white">
            <Image
              source={spotDetails}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-base">
              Spot Details</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push('/loan')}
        >
          <View className="w-full m-1 flex-row justify-center items-center px-10 rounded-lg mx-2 shadow-lg shadow-orange-400 bg-white">
            <Image
              source={loan}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-base">
              Loan</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push('/memRenew')}
        >
          <View className="w-ful  mt-1 flex-row justify-center items-center px-10 rounded-lg mx-2 shadow-lg shadow-orange-400 bg-white">
            <Image
              source={renewal}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-base">
              Membership Renewal</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push('/projComission')}
        >
          <View className="w-full mb-10  mt-1 flex-row justify-center items-center px-10 rounded-lg mx-2 shadow-lg shadow-orange-400 bg-white">
            <Image
              source={payments}
              className="w-7 h-7"
              resizeMode="contain"
            />
            <Text className="w-full pt-5 pb-5 px-5 text-base">
              Work Payments</Text>
          </View>
        </TouchableOpacity>


      </ScrollView>
    </SafeAreaView>
  );
};

export default more;
