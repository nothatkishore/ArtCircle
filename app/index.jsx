import { View, Text, Animated, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import logo from '../assets/images/logo.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';
import TypingText from '../components/TypingText';

const app = () => {
  const [test, settest] = useState(false)

  if (test) {
    return <Redirect href='/home' />;
  }

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const buttonAnim = useRef(new Animated.Value(0)).current; // Initial value for scale: 0
  const [Login, setLogin] = useState(true)

  useEffect(() => {
    // Chaining the logo fade-in, text animation delay, and button bounce animations

    Animated.sequence([
      // Logo fade-in animation
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 1500, // Duration of the logo fade-in
          useNativeDriver: true,
        }
      ),

    ]).start();

    setTimeout(() => router.replace('/signIn'), 2500)
  }, [fadeAnim, buttonAnim]);

  return (
    <SafeAreaView className='h-full w-full bg-[#161622]'>
      <StatusBar style='light' />
      <View className='h-full w-full items-center justify-center'>
        <View className='items-center'>
          <Animated.Image
            source={logo}
            className='h-[300px] w-[300px]'
            resizeMode='contain'
            style={{ opacity: fadeAnim }} // Apply the animated opacity
          />
          <View className='h-[100px]'>
            <View>
              <Text className='text-center text-base w-[200px] font-normal text-white italic'>
                <TypingText text="Association of Cine and Television Art Directors of Southern India" speed={30} />
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default app;
