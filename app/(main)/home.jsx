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
// import Card from '../../components/Card'
import { Card } from "react-native-elements";
import loan from "../../assets/icons/loan.png";

// const home = () => {
//   return (
//     <SafeAreaView className='h-full w-full'>
//         <Header />
//         <ScrollView>
//           <View className="justify-center text-lg bg-black w-full h-14">
//             <Text className="justify-center text-2xl bg-black text-white text-center">
//               Upcoming Events
//             </Text>
//           </View>
//           <View className="flex-row justify-center text-center">
//             <Text>
// sample
//             </Text>
//           </View>
//         </ScrollView>
//     </SafeAreaView>
//   )
// }

// export default home

// const events = [
//   {
//     id: '1',
//     name: 'Art Directors Conference 2024',
//     date: '2024-07-15',
//     description: 'An annual gathering of the best art directors from around the world.',
//   },
//   {
//     id: '2',
//     name: 'Design Thinking Workshop',
//     date: '2024-08-10',
//     description: 'A workshop to enhance your design thinking skills.',
//   },
//   // Add more events here
// ];

// const EventItem = ({ name, date, description }) => (
//   <View style={styles.eventItem}>
//     <Text style={styles.eventName}>{name}</Text>
//     <Text style={styles.eventDate}>{date}</Text>
//     <Text style={styles.eventDescription}>{description}</Text>
//   </View>
// );

// const home = () => {
//   return (
//     <SafeAreaView>
//       <Header/>
//     <FlatList
//       data={events}
//       renderItem={({ item }) => <EventItem {...item} />}
//       keyExtractor={(item) => item.id}
//       contentContainerStyle={styles.container}
//     />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//   },
//   eventItem: {
//     backgroundColor: '#f9f9f9',
//     padding: 15,
//     marginVertical: 8,
//     borderRadius: 5,
//   },
//   eventName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   eventDate: {
//     fontSize: 16,
//     color: '#888',
//   },
//   eventDescription: {
//     fontSize: 14,
//     marginTop: 5,
//   },

// });
// components/EventSection.js

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
      <ScrollView>
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
      </ScrollView>
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
