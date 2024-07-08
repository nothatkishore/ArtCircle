import { Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Header from '../../../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import PaymentCard from '../../../components/PaymentCard'

const workPayments = () => {
  const data =
    [
      { movieTitle: 'God of war', comissionRate: '10000', dueDate: '01-02-2024' },
      { movieTitle: 'Titanic', comissionRate: '20000', dueDate: '02-02-2024' },
      { movieTitle: 'Avatar', comissionRate: '30000', dueDate: '03-02-2024' },
      { movieTitle: 'Avengers', comissionRate: '40000', dueDate: '04-02-2024' },
      { movieTitle: 'Dark knight', comissionRate: '50000', dueDate: '06-02-2024' },
      { movieTitle: 'The Batman', comissionRate: '60000', dueDate: '01-02-2024' },
      { movieTitle: 'Dark Knight rises', comissionRate: '17000', dueDate: '01-02-2024' },
      { movieTitle: 'End game', comissionRate: '80000', dueDate: '01-02-2024' },
      { movieTitle: 'Captain america : the winter soldier', comissionRate: '10000', dueDate: '01-02-2024' }
    ]

  const renderItem = ({ item }) => 
  (
    <PaymentCard 
      bigText={item.movieTitle}
      smallText={item.comissionRate}
      xsmallText={item.dueDate}
    />
  )

  return (
    <SafeAreaView className='flex-1'>
      <Header />
      <View className='px-4 py-5 flex-1'>
        <View className='bg-gray-800 p-2 mb-4 rounded-lg'>
          <Text className='text-center text-white font-normal text-xl'>Pending payments</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>

  )
}

export default workPayments