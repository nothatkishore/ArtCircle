import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import { Card } from "react-native-elements";
import loan from "../../assets/icons/loan.png";


const events = [
  {
    id: "1",
    title: "Upcoming Events",
    subTitle: "Art Director Annual Meet 2024-2025",
    date: "July 10, 2024",
    image:
      "https://lh4.googleusercontent.com/proxy/_R-Ov6AKbYCbJBM3o_b946i1oO2Wbe9sjX58Mmsq2Wk3dvL09CNCl9tQmAeNXKfhsfAVWo9a784JHsIv_0xIG-tt5x9ZHFEwlUBaVx6Qhw1RyHvBRk0cLTG0jOolDk8-6CAwOttWLnu50UMxgr33Fz3RrDpoYlevWDRHj00WF6MTRTv5eYiA",
  },
  {
    id: "2",
    title: "Upcoming Events",
    subTitle: "Art Technician Monthly Meet",
    date: "July 15, 2024",
    image:
      "https://lh4.googleusercontent.com/proxy/_R-Ov6AKbYCbJBM3o_b946i1oO2Wbe9sjX58Mmsq2Wk3dvL09CNCl9tQmAeNXKfhsfAVWo9a784JHsIv_0xIG-tt5x9ZHFEwlUBaVx6Qhw1RyHvBRk0cLTG0jOolDk8-6CAwOttWLnu50UMxgr33Fz3RrDpoYlevWDRHj00WF6MTRTv5eYiA",
  },
  // Add more events here
];

const home = () => {
  return (
    <SafeAreaView className="h-full w-full">
      <Header />
      <FlatList
        data={['']}
        renderItem={() =>
        (
          <>
            <View className="p-5 w-full rounded-xl my-2 bg-slate-50 shadow-lg shadow-orange-400  flex-row justify-between items-center">
              <Text className="color-black items-center text-center   text-2xl mx-16 font-base ">
                Upcoming Events
              </Text>
            </View>
            <View style={styles.container}>
              <FlatList
                data={events}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Card>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subTitle}>{item.subTitle}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                  </Card>
                )}
              />
            </View>
          </>
        )}

      />
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 5,
  },
  subTitle: {
    fontSize: 17,
    fontWeight: "bold",
    padding: 5,
  },
  date: {
    fontSize: 16,
    color: "gray",
    padding: 5,
  },
});

export default home;
