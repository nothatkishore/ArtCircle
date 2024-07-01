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
    return <Redirect href='/forgotPass' />;
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
          duration: 3000, // Duration of the logo fade-in
          useNativeDriver: true,
        }
      ),
      // Delay to account for text animation completion
      Animated.delay(100), // Adjust this delay based on TypingText animation duration
      // Button bounce animation after logo fade-in completes
      Animated.spring(
        buttonAnim,
        {
          toValue: 1,
          friction: 5, // Increase friction to slow down the bounce
          tension: 40,
          useNativeDriver: true,
        }
      ),
    ]).start();
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
                <TypingText text="Association of Cine and Television Art Directors of Southern India" speed={40} />
              </Text>
            </View>
          </View>
        </View>

        <Animated.View style={{ transform: [{ scale: buttonAnim }], marginTop: 100, width: 200 }}>

          <TouchableOpacity
            className='bg-[#ffa620] p-[10px] rounded-lg'
            activeOpacity={0.9}
            onPress={() => router.push('/signIn')}
          >
            <Text className='text-center text-2xl font-normal text-white'>
              Continue
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

export default app;
