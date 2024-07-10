import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker';
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import profilePic from '../../assets/icons/user.png'
import { router } from 'expo-router'
import instagram from '../../assets/icons/instagram.png'
import twitter from '../../assets/icons/twitter.png'
import youtube from '../../assets/icons/youtube.png'
import facebook from '../../assets/icons/facebook.png'
import linkedin from '../../assets/icons/linkedin.png'
import DateTimePicker from '@react-native-community/datetimepicker';
import dateP from '../../assets/icons/july.png'



const profile = () => {

    const openDatePicker = () => {
        setShow(true)
    }

    const [show, setShow] = useState(false)
    const [date, setDate] = useState(new Date())

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setform((prev) => {
            const updatedForm = { ...prev, birthDate: currentDate.toDateString() };
            console.log(updatedForm.birthDate);
            return updatedForm;
        });

        console.log(typeof (form.birthDate))
    };

    const [form, setform] = useState({
        profile: null,
        memberId: '123456',
        firstname: 'Stacksnova',
        lastname: 'Stacksnova',
        designation: 'Art director',
        birthDate: '12-July-2024',
        joiningDate: '14-July-2024',
        contact: '9840287145',
        eContact: '9840287145',
        email: 'samplemailid@gmail.com',
        pAddress: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nemo ea architecto, nostrum delectus maxime, deleniti qui pariatur sunt optio repudiandae. Accusantium, provident consequatur ipsum voluptas impedit est corporis assumenda.,",
        rAddress: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nemo ea architecto, nostrum delectus maxime, deleniti qui pariatur sunt optio repudiandae. Accusantium, provident consequatur ipsum voluptas impedit est corporis assumenda.,",
        bloodGroup: 'B +ve',
        YouTubeId: 'sample@youtube',
        InstagramId: 'sample@instagram',
        facebookId: 'sample@facebook',
        linkedinId: 'sample@linkedin',
        XId: 'sample@X'
    })

    const [edit, setedit] = useState(false)

    return (
        <SafeAreaView className='flex-1 bg-slate-100'>
            <View className='bg-white p-3 mb-7 rounded-lg shadow-2xl'>
                <Text className='text-lg text-center text-gray-700'>Member profile</Text>
                {
                    edit &&
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setedit(false)}
                    >
                        <View className='bg-green-500 p-2 rounded-lg mt-2'>
                            <Text className='text-white text-center'>Save changes</Text>
                        </View>
                    </TouchableOpacity>
                }
            </View>
            <ScrollView className='px-5 py-7 h-full w-full'>



                {/* Profle card */}
                <View className='bg-white p-7 flex-row justify-around rounded-lg'>

                    {/* Profile picture */}
                    <View className='w-auto p-2 justify-center items-center'>
                        <Image
                            source={profilePic}
                            className='h-24 w-24'
                        />
                        <Text className='text-lg'>{form.firstname}</Text>
                        <Text className='text-sm'>{form.designation}</Text>
                        {
                            edit &&
                            <>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                >
                                    <View className='bg-slate-200 p-2 rounded-lg mt-2'>
                                        <Text className='text-slate-700'>Change photo</Text>
                                    </View>
                                </TouchableOpacity>
                            </>
                        }
                    </View>

                    {/* Side buttons */}
                    {
                        !edit &&
                        <View className='p-2 justify-center gap-2'>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => setedit(true)}
                            >
                                <View className='bg-blue-500 py-3 rounded-xl'>
                                    <Text className='text-white text-xs text-center'>Edit</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => router.replace('/CreatePass')}
                            >
                                <View className='bg-green-500 py-3 px-3 rounded-xl'>
                                    <Text className='text-white text-xs text-center'>Change password</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => router.replace('/signIn')}
                            >
                                <View className='bg-red-500 py-3 px-3 rounded-xl text-center'>
                                    <Text className='text-white text-xs text-center'>Logout</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                </View>

                {/* Details page */}

                <View className='bg-white p-7 my-7 rounded-xl'>

                    {/* Member Id */}
                    <View className='mb-4'>
                        <Text>Member Id:</Text>
                        <TextInput
                            value={form.memberId}
                            className='text-lg mt-2 border-b border-slate-700'
                            editable={edit}
                            onChangeText={(value) => ({ ...form, memberId: value })}
                        />
                    </View>

                    {/* First name */}
                    <View className='mb-4'>
                        <Text>First name:</Text>
                        <TextInput
                            value={form.firstname}
                            className='text-lg mt-2 border-b border-slate-700'
                            editable={edit}
                            onChangeText={(value) => ({ ...form, firstname: value })}
                        />
                    </View>

                    {/* Last name */}
                    <View className='mb-4'>
                        <Text>Last name:</Text>
                        <TextInput
                            value={form.lastname}
                            className='text-lg mt-2 border-b border-slate-700'
                            editable={edit}
                            onChangeText={(value) => ({ ...form, lastname: value })}
                        />
                    </View>

                    {/* Date of birth */}
                    <View className='mb-4'>
                        <Text>Date of Birth:</Text>
                        <View className='p-3 mt-2 bg-white border-b flex-row justify-between items-center'>
                            {
                                edit &&
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
                            }

                            <View className='w-2/3 items-start'>
                                <Text className='text-base'>{form.birthDate}</Text>
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

                    {/* Date of birth */}
                    <View className='mb-4'>
                        <Text>Date of Birth:</Text>
                        <View className='p-3 mt-2 bg-white border-b flex-row justify-between items-center'>
                            {
                                edit &&
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
                            }

                            <View className='w-2/3 items-start'>
                                <Text className='text-base'>{form.birthDate}</Text>
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



                    {/* Contact */}
                    <View className='mb-4'>
                        <Text>Contact:</Text>
                        <TextInput
                            value={form.contact}
                            className='text-lg mt-2 border-b border-slate-700'
                            editable={edit}
                            keyboardType='numeric'
                            onChangeText={(value) => ({ ...form, contact: value })}
                        />
                    </View>

                    {/* Emergency Contact */}
                    <View className='mb-4'>
                        <Text>Emergency Contact:</Text>
                        <TextInput
                            value={form.eContact}
                            className='text-lg mt-2 border-b border-slate-700'
                            editable={edit}
                            keyboardType='numeric'
                            onChangeText={(value) => ({ ...form, eContact: value })}
                        />
                    </View>

                    {/* pAddress */}
                    <View className='mb-4'>
                        <Text>Permanent Address:</Text>
                        <TextInput
                            value={form.pAddress}
                            className='text mt-2 border border-slate-700 rounded-lg p-2'
                            editable={edit}
                            numberOfLines={5}
                            style={{ textAlignVertical: 'top' }}
                            onChangeText={(value) => ({ ...form, pAddress: value })}
                            multiline={true}
                        />
                    </View>

                    {/* rAddress */}
                    <View className='mb-4'>
                        <Text>Resident Address:</Text>
                        <TextInput
                            value={form.rAddress}
                            className='text mt-2 border border-slate-700 rounded-lg p-2'
                            editable={edit}
                            numberOfLines={5}
                            style={{ textAlignVertical: 'top' }}
                            onChangeText={(value) => ({ ...form, rAddress: value })}
                            multiline={true}
                        />
                    </View>

                    {/* Blood group */}
                    <View className='mb-4'>
                        <Text className='text-black'>Blood group:</Text>
                        <View className='bg-white mt-2 border-b'>
                            <Picker
                                selectedValue={form.bloodGroup}
                                onValueChange={(value, index) => setform({ ...form, bloodGroup: value })}
                                enabled={edit}
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

                    {/* Instagram id */}
                    <View className='mb-4'>
                        <View className='flex-row items-center gap-2'>
                            <Image
                                source={instagram}
                                className='h-4 w-4'
                            />
                            <Text>Instagram:</Text>
                        </View>
                        <TextInput
                            value={form.InstagramId}
                            className='text mt-2 border-b border-slate-700'
                            editable={edit}
                            onChangeText={(value) => ({ ...form, InstagramId: value })}
                            placeholder='Instagram Id'
                        />
                    </View>

                    {/* Xid */}
                    <View className='mb-4'>
                        <View className='flex-row items-center gap-2'>
                            <Image
                                source={twitter}
                                className='h-4 w-4'
                            />
                            <Text>X:</Text>
                        </View>
                        <TextInput
                            value={form.XId}
                            className=' mt-2 border-b border-slate-700'
                            editable={edit}
                            placeholder='X Id'
                            onChangeText={(value) => ({ ...form, XId: value })}
                        />
                    </View>

                    {/* YouTube id */}
                    <View className='mb-4'>
                        <View className='flex-row items-center gap-2'>
                            <Image
                                source={youtube}
                                className='h-4 w-4'
                            />
                            <Text>YouTube:</Text>
                        </View>
                        <TextInput
                            value={form.YouTubeId}
                            className=' mt-2 border-b border-slate-700'
                            editable={edit}
                            onChangeText={(value) => ({ ...form, YouTubeId: value })}
                            placeholder='YouTube id'
                        />
                    </View>

                    {/* Facebook id */}
                    <View className='mb-4'>
                        <View className='flex-row items-center gap-2'>
                            <Image
                                source={facebook}
                                className='h-4 w-4'
                            />
                            <Text>Facebook:</Text>
                        </View>
                        <TextInput
                            value={form.facebookId}
                            className=' mt-2 border-b border-slate-700'
                            editable={edit}
                            onChangeText={(value) => ({ ...form, facebookId: value })}
                            placeholder='Facebook id'
                        />
                    </View>

                    {/* Linkedin id */}
                    <View className='mb-4'>
                        <View className='flex-row items-center gap-2'>
                            <Image
                                source={linkedin}
                                className='h-4 w-4'
                            />
                            <Text>Linkedin:</Text>
                        </View>
                        <TextInput
                            value={form.linkedinId}
                            className=' mt-2 border-b border-slate-700'
                            editable={edit}
                            onChangeText={(value) => ({ ...form, linkedinId: value })}
                            placeholder='Linkedin id'
                        />
                    </View>

                </View>

                <View>
                    <Text>End of page</Text>
                </View>

            </ScrollView>
            <StatusBar style='light' backgroundColor='#ffa629' />
        </SafeAreaView>
    )
}

export default profile