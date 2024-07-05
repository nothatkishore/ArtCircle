import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const notification = () => {
  const [data, setData] = useState(
    [
      {
        id: 1,
        heading: 'Some random heading goes here',
        date: '18-Oct-2025',
        time: '12:00 AM',
        description: 'This must be the description of news',
        read: false
      },

      {
        id: 2,
        heading: 'Some random heading goes here',
        date: '18-Oct-2025',
        time: '12:00 AM',
        description: 'This must be the description of news',
        read: false
      },

      {
        id: 3,
        heading: 'Some random heading goes here',
        date: '18-Oct-2025',
        time: '12:00 AM',
        description: 'This must be the description of news',
        read: false
      },
      {
        id: 4,
        heading: 'Some random heading goes here',
        date: '18-Oct-2025',
        time: '12:00 AM',
        description: 'This must be the description of news',
        read: false
      },
      {
        id: 5,
        heading: 'Some random heading goes here',
        date: '18-Oct-2025',
        time: '12:00 AM',
        description: 'This must be the description of news',
        read: false
      },
      {
        id: 6,
        heading: 'Some random heading goes here',
        date: '18-Oct-2025',
        time: '12:00 AM',
        description: 'This must be the description of news',
        read: false
      },
      {
        id: 7,
        heading: 'Some random heading goes here',
        date: '18-Oct-2025',
        time: '12:00 AM',
        description: 'This must be the description of news',
        read: false
      },
      {
        id: 8,
        heading: 'Some random heading goes here',
        date: '18-Oct-2025',
        time: '12:00 AM',
        description: 'This must be the description of news',
        read: false
      },
      {
        id: 9,
        heading: 'Some random heading goes here',
        date: '18-Oct-2025',
        time: '12:00 AM',
        description: 'This must be the description of news',
        read: false
      }
    ]) //Fetch from API)

  const renderItems = ({ item }) =>
  (
    <View className='bg-slate-50 m-1 p-4 rounded-xl h-auto'>
      <View className='flex-row justify-end mb-2'>
        <Text className='text-[10px] mr-2'>{item.date}</Text>
        <Text className='text-[10px]'>{item.time}</Text>
      </View>
      <Text className='text-lg font-normal'>{item.heading}</Text>
      <Text className='text-sm mt-2' >{item.description}</Text>

    </View>
  )

  return (
    <SafeAreaView className='h-full w-full'>
      <View className='p-2 bg-[#ffa629]'>
        <Text className='text-xl text-white font-normal text-center'>
          Notification
        </Text>
      </View>

      <View className='m-7 flex-1'>
        {
          data ?
            <>

              <FlatList
                data={data}
                renderItem={renderItems}
                showsVerticalScrollIndicator={false}
              // Add unique id here
              />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setData('')}
              >
                <View className='items-end m-2 justify-end w-auto'>
                  <Text className='bg-slate-50 w-auto p-1 px-3 font-bold rounded-lg'>Clear all</Text>
                </View>
              </TouchableOpacity>
            </>
            :
            <>
              <View className='w-full h-full items-center justify-center' >
                <Text>No Notification</Text>
              </View>
            </>
        }



      </View>


      <StatusBar style='light' backgroundColor='#ffa629' />
    </SafeAreaView>
  )
}

export default notification



{/* <TouchableOpacity
activeOpacity={0.7}
className='w-full items-end'
>
  <View className='w-1/4 bg-slate-50 items-center rounded-lg p-2'>
    <Text className='text-right text-xs font-semibold text-orange-400'>Clear all</Text>
  </View> 
</TouchableOpacity> */}

