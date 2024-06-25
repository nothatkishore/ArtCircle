import { View, Text, ScrollView, FlatList } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import Card from '../../../components/Card'
import logo from '../../../assets/images/logo.png'


const spots = () => {
  const [store, setstore] = useState('')

  const data = [{ name: "Kishore", role: "Software Engineer", image: logo }, { name: "John", role: "Doctor" }, { name: "John", role: "Doctor" }, { name: "John", role: "Doctor" }, { name: "John", role: "Doctor" }, { name: "John", role: "Doctor" }, { name: "John", role: "Doctor" }, { name: "John", role: "Doctor" }]

  const renderItem = ({ item }) =>
  (
    <Card
      BigText={item.name}
      SmallText={item.role}
      image={item.image}
      PATH='productDetails'
    />
  )

  return (
    <SafeAreaView className='bg-black h-full w-full'>

      <Header />
      <View className='mb-2'>
        <Text className='text-white text-center text-xl font-light'>Products at {store || 'Shop name'}</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
      />

    </SafeAreaView>
  )
}

export default spots