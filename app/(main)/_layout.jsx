import { View, Text, Image } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'
import home from '../../assets/icons/home.png'
import create from '../../assets/icons/create.png'
import search from '../../assets/icons/search.png'
import payments from '../../assets/icons/payments.png'
import more from '../../assets/icons/more.png'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className='items-center justify-center'>
      <Image
        source={icon}
        className='w-6 h-6'
        tintColor={color}
        resizeMode='contain'
      />

      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-[10px] text-white`}>
        {name}
      </Text>
    </View>
  )
}


const MainLayout = () => {
  return (
    <>

      <Tabs
        screenOptions=
        {
          {
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#fff',
            tabBarStyle:
            {
              height: 60,
              backgroundColor: '#ffa629',
            }
          }
        }
      >

        <Tabs.Screen
          name='home'
          options=
          {
            {
              title: 'Home',
              headerShown: false,
              tabBarIcon: ({ color, focused }) =>
              (
                <TabIcon
                  icon={home}
                  color={color}
                  name='Home'
                  focused={focused}
                />
              )
            }
          }
        />

        <Tabs.Screen
          name='(search)'
          options=
          {
            {
              title: 'Search',
              headerShown: false,
              tabBarIcon: ({ color, focused }) =>
              (
                <TabIcon
                  icon={search}
                  color={color}
                  name='Search'
                  focused={focused}
                />
              )
            }
          }
        />



        <Tabs.Screen
          name='(create)'
          options=
          {
            {
              title: 'Create',
              headerShown: false,
              tabBarIcon: ({ color, focused }) =>
              (
                <TabIcon
                  icon={create}
                  color={color}
                  name='Create'
                  focused={focused}
                />
              )
            }
          }
        />

        <Tabs.Screen
          name='(payments)'
          options=
          {
            {
              title: 'Payments',
              headerShown: false,
              tabBarIcon: ({ color, focused }) =>
              (
                <TabIcon
                  icon={payments}
                  color={color}
                  name='Payments'
                  focused={focused}
                />
              )
            }
          }
        />

        <Tabs.Screen
          name='more'
          options=
          {
            {
              title: 'More',
              headerShown: false,
              tabBarIcon: ({ color, focused }) =>
              (
                <TabIcon
                  icon={more}
                  color={color}
                  name='More'
                  focused={focused}
                />
              )
            }
          }
        />

      </Tabs>
    </>
  )
}

export default MainLayout