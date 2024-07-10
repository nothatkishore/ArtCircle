import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import { Picker } from '@react-native-picker/picker';
import dateP from '../../../assets/icons/july.png'
import DateTimePicker from '@react-native-community/datetimepicker';

//  Form validation
//  API requests

const addMovies = () => {

  const [date, setdate] = useState(new Date())
  const [showPicker, setshowPicker] = useState(false)

  const DatePickerHandler = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setshowPicker(false)
    setdate(currentDate)
    setform((prev) => ({ ...prev, projectDate: currentDate.toDateString() }))
  }

  const [form, setform] = useState(
    {
      projectName: '',
      projecType: '',
      projectDate: '',
      designation: '',
      productionName: '',
      directorName: '',
      salary: '',
    })

  const handlePress = () => {
    console.log(form)
  }

  return (
    <SafeAreaView className='bg-[#f0f3f6] h-full w-full'>
      <Header />
      <Text className='text-white m-4 p-2 rounded-lg text-center text-xl font-light bg-gray-700'>
        Add new project
      </Text>
      <ScrollView className='h-full w-full'>

        {/* Project Name */}
        <View className='m-3'>
          <Text className='text-black'>Project name:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='Project name'
              value={form.projectName}
              onChangeText={(value) => setform({ ...form, projectName: value })}
            />
          </View>
        </View>

        {/* Project type */}
        <View className='m-3'>
          <Text>Project type:</Text>
          <View className='bg-white rounded-xl mt-2 border'>
            <Picker
              selectedValue={form.projecType}
              onValueChange={(value, index) => setform({ ...form, projecType: value })}
            >
              <Picker.Item label="Advertisement" value="Advertisement" />
              <Picker.Item label="Cinema" value="Cinema" />
              <Picker.Item label="Series" value="Series" />
              <Picker.Item label="Others" value="Others" />
            </Picker>
          </View>
        </View>

        {/* Project start date */}

        <View className='m-3'>
          <Text>Project start date:</Text>
          <View className='p-3 mt-2 bg-white border rounded-xl flex-row justify-between items-center'>
            <View className='w-1/3 items-start'>
              <TouchableOpacity
                onPress={() => setshowPicker(true)}
              >
                <View className='w-2/3'>
                  <Image
                    source={dateP}
                    className='h-7 w-7'
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View className='w-2/3 items-start'>
              <Text className='text-lg'>{form.projectDate}</Text>
            </View>
          </View>
          {
            showPicker &&
            <DateTimePicker
              value={date}
              mode='date'
              display='default'
              onChange={DatePickerHandler}
            />
          }
        </View>


        {/* Designation */}
        <View className='m-3'>
          <Text className='text-black'>Designation:</Text>
          <View className='bg-white rounded-xl mt-2 border'>
            <Picker
              selectedValue={form.designation}
              onValueChange={(value, index) => setform({ ...form, designation: value })}
            >
              <Picker.Item label="Technician" value="Technician" />
              <Picker.Item label="Asst.Director" value="Asst.Director" />
              <Picker.Item label="Director" value="Director" />
            </Picker>
          </View>
        </View>

        {/* Production house */}
        <View className='m-3'>
          <Text className='text-black'>Production House:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='Production name'
              value={form.productionName}
              onChangeText={(value) => setform({ ...form, productionName: value })}
            />
          </View>
        </View>

        {/* Director name */}
        <View className='m-3'>
          <Text className='text-black'>Director name:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='Director name'
              value={form.directorName}
              onChangeText={(value) => setform({ ...form, directorName: value })}
            />
          </View>
        </View>

        {/* Salary */}
        <View className='m-3'>
          <Text className='text-black'>Salary:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='Salary'
              keyboardType='numeric'
              value={form.salary}
              onChangeText={(value) => setform({ ...form, salary: value })}
            />
          </View>
        </View>

        {/* Add project button */}
        <View className='my-10 bg-orange-600 mx-3 p-3 rounded-lg'>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handlePress}
          >
            <Text className='text-white text-base text-center'>
              Add Project
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}


export default addMovies