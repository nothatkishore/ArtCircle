import { View, Text, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context' 
import Header from '../../../components/Header'

const spotDetails = () => 
{
  const data = [{image1 : 'image1 goes here'},{image1 : 'image1 goes here'},{image1 : 'image1 goes here'},{image1 : 'image1 goes here'},{image1 : 'image1 goes here'},{image1 : 'image1 goes here'},{image1 : 'image1 goes here'},{image1 : 'image1 goes here'},{image1 : 'image1 goes here'},{image1 : 'image1 goes here'}]
  const renderItems = ( {item} ) =>
  (
    <View className='bg-blue-400 my-2 p-4'>
      <Text>{item.image1}</Text>
    </View>
  )

  const footer = () =>
  (
    <Text className='text-white text-3xl'>Footer</Text>
  )

  const header = () =>
  (
    <Text className='text-white text-3xl'>Header</Text>
  )

  return (
    <SafeAreaView className='bg-black h-full w-full'>
      <Header />
      <FlatList 
        data={data}
        renderItem={renderItems}
        className='m-4'
        ListHeaderComponent={header}
        ListFooterComponent={footer}
      />

    </SafeAreaView>
  )
}

export default spotDetails