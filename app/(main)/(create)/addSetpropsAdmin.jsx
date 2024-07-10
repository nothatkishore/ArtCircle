import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, Alert, FlatList } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import { Picker } from '@react-native-picker/picker';
import profile from '../../../assets/icons/photo.png'
import * as ImagePicker from 'expo-image-picker'


const addSetpropsAdmin = () => {

    const [form, setform] = useState(
        {
            artistName: '',
            movieName: '',
            setImage: '',
            projectType: ''
        })

    const projectsActive =
        [
            { projectId: 1, projectName: 'Movie 1' },
            { projectId: 2, projectName: 'Movie 2' },
            { projectId: 3, projectName: 'Movie 3' },
            { projectId: 4, projectName: 'Movie 4' },
            { projectId: 5, projectName: 'Movie 5' },
            { projectId: 6, projectName: 'Movie 6' }
        ]




    const handlePost = () => {
        // post request
        console.log('Data posted')
    }

    const [image, setimage] = useState([])

    const handlePress = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

        if (!permissionResult.granted) {
            Alert.alert('Permission required', 'Media access required from device to pick a photo')
            return
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.canceled) {
            setimage([...image, result.assets[0].uri])
            console.log(image)
        }
    }

    const removeItem = (index) => {
        const newImage = image.filter((_, i) => i !== index)
        setimage(newImage)
    }

    return (
        <SafeAreaView className='bg-[#f0f3f6] h-full w-full'>
            <Header />
            <Text className='text-white m-4 p-2 rounded-lg text-center text-xl font-light bg-gray-700'>
                Upload set pictures
            </Text>
            <ScrollView>

                <View className='m-3'>
                    <Text className='text-black'>Member name:</Text>
                    <View className='mt-2 bg-gray-50 rounded-xl border'>
                        <TextInput
                            className='p-3'
                            placeholder='Member name'
                            value={form.artistName}
                            onChangeText={(value) => setform({ ...form, artistName: value })}
                        />
                    </View>
                </View>

                <View className='m-3'>
                    <Text className='text-black'>Project name:</Text>
                    <View className='bg-white rounded-xl mt-2 border'>
                        <Picker
                            selectedValue={form.movieName}
                            onValueChange={(value, index) => setform({ ...form, movieName: value })}
                        >
                            {
                                projectsActive.map((value) => (
                                    <Picker.Item key={value.projectId} label={value.projectName} value={value.projectName} />
                                ))
                            }
                        </Picker>
                    </View>
                </View>


                <View className='h-full w-full'>

                    <View className='m-3'>
                        <Text className='text-black'>Upload pictures</Text>
                        <View className='mt-2 border p-4 rounded-lg justify-center'>

                            <ScrollView
                                horizontal
                                overScrollMode='always'
                            >
                                {
                                    image.map((item, index) =>
                                    (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => removeItem(index)} //remove
                                        >
                                            <Image
                                                source={{ uri: item }}
                                                className='w-24 h-24 mx-1'
                                                resizeMode='contain'
                                            />
                                        </TouchableOpacity>
                                    ))
                                }
                            </ScrollView>
                            <Text className='text-center my-7'>images : {image.length} </Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={handlePress}
                            >
                                <View className='justify-center items-center bg-sky-300 p-2 flex-row rounded-xl shadow-2xl'>
                                    <Image
                                        source={profile}
                                        className='h-10 w-10 mx-2'
                                        resizeMode='contain'
                                    />
                                    <Text className='text-white font-bold'>Add Pictures</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>




                    <View className='my-10 bg-orange-600 mx-3 p-3 rounded-xl'>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={handlePost}
                        >
                            <Text className='text-white text-center text-base'>
                                Upload
                            </Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default addSetpropsAdmin