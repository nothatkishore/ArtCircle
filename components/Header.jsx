import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import user from '../assets/icons/user.png';
import bell from '../assets/icons/bell.png';
import { useRouter } from 'expo-router'; // Correct import
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';

const Header = () => {
  const profilePic = useSelector((state) => state.user.profile);
  const router = useRouter(); // Use useRouter as a hook

  return (
    <View className="flex-row p-3 border-b-[1px] rounded-b-lg border-b-slate-200 items-center justify-between bg-[#ffa629]">
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push('/profile')}
        >
          <Image
            source={profilePic ? { uri: profilePic } : user} // Ensure the profilePic source is correctly handled
            resizeMode='cover'
            className="h-[45px] w-[45px] rounded-full"
          />
        </TouchableOpacity>
      </View>

      <View className="items-center">
        <Text className="text-white text-base font-light">
          Association of Cine & TV
        </Text>
        <Text className="text-white text-base font-light">
          Art directors of Southern India
        </Text>
      </View>

      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.push('/notification')}
        >
          <Image
            source={bell}
            resizeMode="contain"
            className="h-[30px] w-[30px]"
          />
        </TouchableOpacity>
      </View>
      <StatusBar style="light" backgroundColor="#ffa629" />
    </View>
  );
};

export default Header;
