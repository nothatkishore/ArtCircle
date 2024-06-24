import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import user from '../../assets/icons/user.png';

const Profile = () => {
    const [form, setForm] = useState({
        name: 'Kishore',
        designation: 'Director',
        phone: '9840287145',
        email: 'reachoutkishorear@gmail.com'
    });

    const [edit, setEdit] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ margin: 20, alignItems: 'center' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={user}
                        resizeMode='contain'
                        style={{ backgroundColor: 'white', height: 100, width: 100, borderRadius: 50 }}
                    />
                    <Text style={{ color: 'white', fontSize: 24, marginTop: 10 }}>{form.name}</Text>
                    <Text style={{ color: 'white', fontSize: 20, marginTop: 5 }}>{form.designation}</Text>
                </View>

                <ScrollView style={{ width: '100%' }}>
                    <View style={{ marginTop: 20, width: '100%' }}>
                        <Text style={{ color: 'white', fontSize: 12 }}>Name: </Text>
                        <TextInput
                            style={{ color: 'white', fontSize: 20, borderBottomColor: 'slategray', borderBottomWidth: 1, marginTop: 5, paddingHorizontal: 5 }}
                            value={form.name}
                            editable={edit}
                            onChangeText={(text) => setForm({ ...form, name: text })}
                        />
                    </View>
                    <View style={{ marginTop: 20, width: '100%' }}>
                        <Text style={{ color: 'white', fontSize: 12 }}>Designation: </Text>
                        {edit ? (
                            <View style={{ backgroundColor: 'white', borderRadius: 10, marginTop: 5 }}>
                                <Picker
                                    selectedValue={form.designation}
                                    onValueChange={(value) => setForm({ ...form, designation: value })}
                                >
                                    <Picker.Item label="Technician" value="Technician" />
                                    <Picker.Item label="Asst.Director" value="Asst.Director" />
                                    <Picker.Item label="Director" value="Director" />
                                </Picker>
                            </View>
                        ) : (
                            <TextInput
                                style={{ color: 'white', fontSize: 20, borderBottomColor: 'slategray', borderBottomWidth: 1, marginTop: 5, paddingHorizontal: 5 }}
                                value={form.designation}
                                editable={false}
                            />
                        )}
                    </View>
                    <View style={{ marginTop: 20, width: '100%' }}>
                        <Text style={{ color: 'white', fontSize: 12 }}>Phone number: </Text>
                        <TextInput
                            style={{ color: 'white', fontSize: 20, borderBottomColor: 'slategray', borderBottomWidth: 1, marginTop: 5, paddingHorizontal: 5 }}
                            value={form.phone}
                            editable={edit}
                            onChangeText={(text) => setForm({ ...form, phone: text })}
                        />
                    </View>
                    <View style={{ marginTop: 20, width: '100%' }}>
                        <Text style={{ color: 'white', fontSize: 12 }}>Email address: </Text>
                        <TextInput
                            style={{ color: 'white', fontSize: 18, borderBottomColor: 'slategray', borderBottomWidth: 1, marginTop: 5, paddingHorizontal: 5 }}
                            value={form.email}
                            editable={edit}
                            onChangeText={(text) => setForm({ ...form, email: text })}
                        />
                    </View>
                    <View style={{ marginVertical: 20, backgroundColor: 'orange', padding: 10, borderRadius: 10 }}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => setEdit(!edit)}
                        >
                            <Text style={{ color: 'white', textAlign: 'center' }}>{edit ? 'Save Changes' : 'Edit Profile'}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default Profile;
