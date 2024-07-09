import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, Alert, Button } from 'react-native'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import { Picker } from '@react-native-picker/picker';
import profile from '../../../assets/icons/photo.png'
import * as ImagePicker from 'expo-image-picker'
import { RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import dateP from '../../../assets/icons/july.png'

// Functionality
//  Image picker functionality
//  Form validation
//  API requests

const addMember = () => {

  const [form, setform] = useState(
    {
      profile: null,
      firstName: '',
      lastName: '',
      DOB: '',
      gender: '',
      position: '',
      phone: '',
      email: '',
      bloodGroup: '',
      pAddress: '',
      rAddress: '',
      isMember: false,
      MemberRole: ''
    })

  const [show, setShow] = useState(false)
  const [date, setDate] = useState(new Date())
  const handlePress = () => {
    console.log(form)
  }

  const uploadImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (permissionResult.granted === false) {
      Alert.alert('Access denied', 'Permission required to import image from gallery')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1
    })

    if (!result.canceled) {
      setform({ ...form, profile: result.assets[0].uri })
    }
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setform((prev) => {
      const updatedForm = { ...prev, DOB: currentDate.toDateString() };
      console.log(updatedForm.DOB);
      return updatedForm;
    });

    console.log(typeof (form.DOB))
  };

  // useEffect(() => {
  //   console.log(form.DOB);
  // }, [form.DOB]);

  const openDatePicker = () => {
    setShow(true)
  }

  const removeImage = () =>
  {
    setform((prev) =>({...prev, profile : null}))
  }

  return (
    <SafeAreaView className='bg-[#f0f3f6] h-full w-full'>
      <Header />
      <Text className='text-white m-4 p-2 rounded-lg text-center text-xl font-light bg-gray-700'>
        Add Member details
      </Text>
      <ScrollView className='h-full w-full'>
        <View className='m-3'>
          <Text className='text-black'>Profile picture</Text>
          <View className='mt-2 items-center border rounded-xl p-2'>
            <TouchableOpacity
              onPress={removeImage}
            >
              <Image
                source={{ uri: form.profile }}
                resizeMode='contain'
                className='h-24 w-24'
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={uploadImage}
              className={form.profile ? 'hidden' : ''}
            >
              <View className='flex-row justify-center items-center p-1 bg-white rounded m-2'>
                <Image
                  source={profile}
                  resizeMode='contain'
                  className='h-7 w-7'
                />
                <Text>Upload</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className='m-3'>
          <Text className='text-black'>First name:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='First name'
              value={form.firstName}
              onChangeText={(value) => setform({ ...form, firstName: value })}
            />
          </View>
        </View>

        <View className='m-3'>
          <Text className='text-black'>Last name:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='Last name'
              value={form.lastName}
              onChangeText={(value) => setform({ ...form, lastName: value })}
            />
          </View>
        </View>

        <View className='m-3'>
          <Text>Date of Birth:</Text>
          <View className='p-3 mt-2 bg-white border rounded-xl flex-row justify-between items-center'>
            <View className='w-1/3 items-start'>
              <TouchableOpacity
                onPress={openDatePicker}
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
              <Text className='text-lg'>{form.DOB}</Text>
            </View>
          </View>
          {
            show &&
            <DateTimePicker
              value={date}
              mode='date'
              display='default'
              onChange={onChange}
            />
          }
        </View>


        <View className='m-3'>
          <Text className='text-black'>Gender:</Text>
          <View className='bg-white rounded-xl mt-2 border'>
            <Picker
              selectedValue={form.position}
              onValueChange={(value, index) => setform({ ...form, gender: value })}
            >
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>
        </View>

        <View className='m-3'>
          <Text className='text-black'>Position:</Text>
          <View className='bg-white rounded-xl mt-2 border'>
            <Picker
              selectedValue={form.position}
              onValueChange={(value, index) => setform({ ...form, position: value })}
            >
              <Picker.Item label="Technician" value="Technician" />
              <Picker.Item label="Asst.Director" value="Asst.Director" />
              <Picker.Item label="Director" value="Director" />
            </Picker>
          </View>
        </View>

        <View className='m-3'>
          <Text className='text-black'>Phone number:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='Phone number'
              keyboardType='numeric'
              value={form.phone}
              onChangeText={(value) => setform({ ...form, phone: value })}
            />
          </View>
        </View>

        <View className='m-3'>
          <Text className='text-black'>Email Address:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='Email address'
              value={form.email}
              onChangeText={(value) => setform({ ...form, email: value })}
            />
          </View>
        </View>

        <View className='m-3'>
          <Text className='text-black'>Resident Address:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='Resident Address'
              multiline={true}
              style={{ textAlignVertical: 'top' }}
              numberOfLines={5}
              value={form.rAddress}
              onChangeText={(value) => setform({ ...form, rAddress: value })}
            />
          </View>
        </View>

        <View className='m-3'>
          <Text className='text-black'>Permanent Address:</Text>
          <View className='mt-2 bg-gray-50 rounded-xl border'>
            <TextInput
              className='p-3'
              placeholder='Permanent Address'
              multiline={true}
              style={{ textAlignVertical: 'top' }}
              numberOfLines={5}
              value={form.pAddress}
              onChangeText={(value) => setform({ ...form, pAddress: value })}
            />
          </View>
        </View>

        <View className='m-3'>
          <Text className='text-black'>Blood group:</Text>
          <View className='bg-white rounded-xl mt-2 border'>
            <Picker
              selectedValue={form.bloodGroup}
              onValueChange={(value, index) => setform({ ...form, bloodGroup: value })}
            >
              <Picker.Item label="A +ve" value="A +ve" />
              <Picker.Item label="A -ve" value="A -ve" />
              <Picker.Item label="B +ve" value="B +ve" />
              <Picker.Item label="B -ve" value="B -ve" />
              <Picker.Item label="AB +ve" value="AB +ve" />
              <Picker.Item label="AB -ve" value="AB -ve" />
              <Picker.Item label="O +ve" value="O +ve" />
              <Picker.Item label="O -ve" value="O -ve" />
            </Picker>
          </View>
        </View>

        <View className='m-3'>
          <View>
            <Text>Have posting in Committe ?</Text>
          </View>

          <View className='mt-2'>
            <RadioButton.Group
              onValueChange={(value) => setform({ ...form, isMember: value })}
              value={form.isMember}
            >
              <View className='flex-col items-start justify-center'>
                <View className='flex-row items-center justify-start'>
                  <RadioButton value={true} />
                  <Text>Yes</Text>
                </View>
                <View className='flex-row items-center justify-start'>
                  <RadioButton value={false} />
                  <Text>No</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
        </View>

        {
          form.isMember ?
            <View className='m-3'>
              <Text className='text-black'>Committee position:</Text>
              <View className='bg-white rounded-xl mt-2 border'>
                <Picker
                  selectedValue={form.MemberRole}
                  onValueChange={(value, index) => setform({ ...form, MemberRole: value })}
                >
                  <Picker.Item label="President" value="President" />
                  <Picker.Item label="Vice President" value="Vice President" />
                  <Picker.Item label="General Secretary" value="General Secretary" />
                  <Picker.Item label="Joint Secretary" value="Joint Secretary" />
                  <Picker.Item label="Treasurer" value="Treasurer" />
                  <Picker.Item label="Committee Member" value="Committee Member" />
                </Picker>
              </View>
            </View>
            :
            <>
            </>
        }

        <View className='my-10 bg-orange-600 mx-3 p-2 rounded-xl'>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handlePress}
          >
            <Text className='text-white text-center'>
              Add Member
            </Text>
          </TouchableOpacity>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}


export default addMember