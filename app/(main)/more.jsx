import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import user from '../../assets/icons/user.png'
import setP from '../../assets/icons/setP.png'
import project from '../../assets/icons/project.png'
import publishPost from '../../assets/icons/publishPost.png'
import { Link, router } from "expo-router";

const more = () => {
  return (
    <SafeAreaView className="bg-slate-300">
      <ScrollView>


        <View className="w-full h-14 bg-[#ff9b0f]">
          <Text className="color-white text-left mx-5 text-xl pt-4 text-opacity-40 font-extrabold">
            More
          </Text>
        </View>

        <TouchableOpacity
        onPress={()=> router.push('/addMember')}
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
        onPress={()=> router.push('/addSetprops')}
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
        onPress={()=>router.push('/addMovies')}
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
        onPress={()=> router.push('/write')}
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
        onPress={()=> router.push('/productDetails')}
        >
        <View className="w-ful  mt-5 flex-row justify-center items-center px-10  bg-white">
          <Image
          source={publishPost}
          className="w-7 h-7"
          resizeMode="contain"
          />
          <Text className="w-full pt-5 pb-5 px-5 text-lg">
          Product Details</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=> router.push('/searchLocation')}
        >
        <View className="w-ful  mt-0.5 flex-row justify-center items-center px-10  bg-white">
          <Image
          source={publishPost}
          className="w-7 h-7"
          resizeMode="contain"
          />
          <Text className="w-full pt-5 pb-5 px-5 text-lg">
          Search Location</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=> router.push('/searchProducts')}
        >
        <View className="w-ful  mt-0.5 flex-row justify-center items-center px-10  bg-white">
          <Image
          source={publishPost}
          className="w-7 h-7"
          resizeMode="contain"
          />
          <Text className="w-full pt-5 pb-5 px-5 text-lg">
          Search Products</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=> router.push('/spotDetails')}>
        <View className="w-ful  mt-0.5 flex-row justify-center items-center px-10  bg-white">
          <Image
          source={publishPost}
          className="w-7 h-7"
          resizeMode="contain"
          />
          <Text className="w-full pt-5 pb-5 px-5 text-lg">
          Spot Products</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=> router.push('/loan')}
        >
        <View className="w-ful  mt-5 flex-row justify-center items-center px-10  bg-white">
          <Image
          source={publishPost}
          className="w-7 h-7"
          resizeMode="contain"
          />
          <Text className="w-full pt-5 pb-5 px-5 text-lg">
          Loan</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=> router.push('/membershipRenewal')}
        >
        <View className="w-ful  mt-0.5 flex-row justify-center items-center px-10  bg-white">
          <Image
          source={publishPost}
          className="w-7 h-7"
          resizeMode="contain"
          />
          <Text className="w-full pt-5 pb-5 px-5 text-lg">
         Membership Renewal</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=> router.push('/workPayments')}
        >
        <View className="w-ful  mt-0.5 flex-row justify-center items-center px-10  bg-white">
          <Image
          source={publishPost}
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
