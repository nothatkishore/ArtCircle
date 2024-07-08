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
import { Card } from "react-native-elements";
import Cards from "../../components/Cards";

const home = () => {
  const recentLocations = [
    { name: "Spot No-1", role: "Guindy", location : "Google Map location Link" },
    { name: "Spot No-2", role: "Anna nagar", location : "Google Map location Link" },
    { name: "Spot No-3", role: "VR Mall", location : "Google Map location Link" },
  ];
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
      subTitle: "Art Director Annual Meet 2024-2025",
      date: "July 15, 2024",
      image:
        "https://lh4.googleusercontent.com/proxy/_R-Ov6AKbYCbJBM3o_b946i1oO2Wbe9sjX58Mmsq2Wk3dvL09CNCl9tQmAeNXKfhsfAVWo9a784JHsIv_0xIG-tt5x9ZHFEwlUBaVx6Qhw1RyHvBRk0cLTG0jOolDk8-6CAwOttWLnu50UMxgr33Fz3RrDpoYlevWDRHj00WF6MTRTv5eYiA",
    },
    {
      id: "3",
      title: "Upcoming Events",
      subTitle: "Art Director Annual Meet 2024-2025",
      date: "July 15, 2024",
      image:
        "https://lh4.googleusercontent.com/proxy/_R-Ov6AKbYCbJBM3o_b946i1oO2Wbe9sjX58Mmsq2Wk3dvL09CNCl9tQmAeNXKfhsfAVWo9a784JHsIv_0xIG-tt5x9ZHFEwlUBaVx6Qhw1RyHvBRk0cLTG0jOolDk8-6CAwOttWLnu50UMxgr33Fz3RrDpoYlevWDRHj00WF6MTRTv5eYiA",
    },
    {
      id: "4",
      title: "Upcoming Events",
      subTitle: "Art Director Annual Meet 2024-2025",
      date: "July 15, 2024",
      image:
        "https://lh4.googleusercontent.com/proxy/_R-Ov6AKbYCbJBM3o_b946i1oO2Wbe9sjX58Mmsq2Wk3dvL09CNCl9tQmAeNXKfhsfAVWo9a784JHsIv_0xIG-tt5x9ZHFEwlUBaVx6Qhw1RyHvBRk0cLTG0jOolDk8-6CAwOttWLnu50UMxgr33Fz3RrDpoYlevWDRHj00WF6MTRTv5eYiA",
    },
    {
      id: "5",
      title: "Upcoming Events",
      subTitle: "Art Director Annual Meet 2024-2025",
      date: "July 15, 2024",
      image:
        "https://lh4.googleusercontent.com/proxy/_R-Ov6AKbYCbJBM3o_b946i1oO2Wbe9sjX58Mmsq2Wk3dvL09CNCl9tQmAeNXKfhsfAVWo9a784JHsIv_0xIG-tt5x9ZHFEwlUBaVx6Qhw1RyHvBRk0cLTG0jOolDk8-6CAwOttWLnu50UMxgr33Fz3RrDpoYlevWDRHj00WF6MTRTv5eYiA",
    },
    {
      id: "6",
      title: "Upcoming Events",
      subTitle: "Art Director Annual Meet 2024-2025",
      date: "July 15, 2024",
      image:
        "https://lh4.googleusercontent.com/proxy/_R-Ov6AKbYCbJBM3o_b946i1oO2Wbe9sjX58Mmsq2Wk3dvL09CNCl9tQmAeNXKfhsfAVWo9a784JHsIv_0xIG-tt5x9ZHFEwlUBaVx6Qhw1RyHvBRk0cLTG0jOolDk8-6CAwOttWLnu50UMxgr33Fz3RrDpoYlevWDRHj00WF6MTRTv5eYiA",
    },
    {
      id: "7",
      title: "Upcoming Events",
      subTitle: "Art Director Annual Meet 2024-2025",
      date: "July 15, 2024",
      image:
        "https://lh4.googleusercontent.com/proxy/_R-Ov6AKbYCbJBM3o_b946i1oO2Wbe9sjX58Mmsq2Wk3dvL09CNCl9tQmAeNXKfhsfAVWo9a784JHsIv_0xIG-tt5x9ZHFEwlUBaVx6Qhw1RyHvBRk0cLTG0jOolDk8-6CAwOttWLnu50UMxgr33Fz3RrDpoYlevWDRHj00WF6MTRTv5eYiA",
    },
    {
      id: "8",
      title: "Upcoming Events",
      subTitle: "Art Director Annual Meet 2024-2025",
      date: "July 15, 2024",
      image:
        "https://lh4.googleusercontent.com/proxy/_R-Ov6AKbYCbJBM3o_b946i1oO2Wbe9sjX58Mmsq2Wk3dvL09CNCl9tQmAeNXKfhsfAVWo9a784JHsIv_0xIG-tt5x9ZHFEwlUBaVx6Qhw1RyHvBRk0cLTG0jOolDk8-6CAwOttWLnu50UMxgr33Fz3RrDpoYlevWDRHj00WF6MTRTv5eYiA",
    },
    {
      id: "9",
      title: "Upcoming Events",
      subTitle: "Art Director Annual Meet 2024-2025",
      date: "July 15, 2024",
      image:
        "https://lh4.googleusercontent.com/proxy/_R-Ov6AKbYCbJBM3o_b946i1oO2Wbe9sjX58Mmsq2Wk3dvL09CNCl9tQmAeNXKfhsfAVWo9a784JHsIv_0xIG-tt5x9ZHFEwlUBaVx6Qhw1RyHvBRk0cLTG0jOolDk8-6CAwOttWLnu50UMxgr33Fz3RrDpoYlevWDRHj00WF6MTRTv5eYiA",
    },
    {
      id: "10",
      title: "Upcoming Events",
      subTitle: "Art Director Annual Meet 2024-2025",
      date: "July 15, 2024",
      image:
        "https://lh4.googleusercontent.com/proxy/_R-Ov6AKbYCbJBM3o_b946i1oO2Wbe9sjX58Mmsq2Wk3dvL09CNCl9tQmAeNXKfhsfAVWo9a784JHsIv_0xIG-tt5x9ZHFEwlUBaVx6Qhw1RyHvBRk0cLTG0jOolDk8-6CAwOttWLnu50UMxgr33Fz3RrDpoYlevWDRHj00WF6MTRTv5eYiA",
    },
    // Add more events here
  ];

  const payments = [
    {
      id: "1",
      artDirectorName: "Name : Stacksnova",
      artDirectorId: "ID No :123",
      movieName: "Movie Name - Leo",
      amountReceived: "Amount Received - 5,00,000",
      amountPaidForAssociation: "Amount Paid For Associaion - 100000",
      image:
        "https://lh4.googleusercontent.com/proxy/_R-Ov6AKbYCbJBM3o_b946i1oO2Wbe9sjX58Mmsq2Wk3dvL09CNCl9tQmAeNXKfhsfAVWo9a784JHsIv_0xIG-tt5x9ZHFEwlUBaVx6Qhw1RyHvBRk0cLTG0jOolDk8-6CAwOttWLnu50UMxgr33Fz3RrDpoYlevWDRHj00WF6MTRTv5eYiA",
      date: "June 22, 2024",
    },
    {
      id: "2",
      artDirectorName: "Name : Stacksnova",
      artDirectorId: "ID No :123",
      movieName: "Movie Name - Leo",
      amountReceived: "Amount Received - 5,00,000",
      amountPaidForAssociation: "Amount Paid For Associaion - 100000",
      image:
        "https://lh4.googleusercontent.com/proxy/_R-Ov6AKbYCbJBM3o_b946i1oO2Wbe9sjX58Mmsq2Wk3dvL09CNCl9tQmAeNXKfhsfAVWo9a784JHsIv_0xIG-tt5x9ZHFEwlUBaVx6Qhw1RyHvBRk0cLTG0jOolDk8-6CAwOttWLnu50UMxgr33Fz3RrDpoYlevWDRHj00WF6MTRTv5eYiA",
      date: "June 22, 2024",
    },
    {
      id: "3",
      artDirectorName: "Name : Stacksnova",
      artDirectorId: "ID No :123",
      movieName: "Movie Name - Leo",
      amountReceived: "Amount Received - 5,00,000",
      amountPaidForAssociation: "Amount Paid For Associaion - 100000",
      image:
        "https://lh4.googleusercontent.com/proxy/_R-Ov6AKbYCbJBM3o_b946i1oO2Wbe9sjX58Mmsq2Wk3dvL09CNCl9tQmAeNXKfhsfAVWo9a784JHsIv_0xIG-tt5x9ZHFEwlUBaVx6Qhw1RyHvBRk0cLTG0jOolDk8-6CAwOttWLnu50UMxgr33Fz3RrDpoYlevWDRHj00WF6MTRTv5eYiA",
      date: "June 22, 2024",
    },
    {
      id: "4",
      artDirectorName: "Name : Stacksnova",
      artDirectorId: "ID No :123",
      movieName: "Movie Name - Leo",
      amountReceived: "Amount Received - 5,00,000",
      amountPaidForAssociation: "Amount Paid For Associaion - 100000",
      image:
        "https://lh4.googleusercontent.com/proxy/_R-Ov6AKbYCbJBM3o_b946i1oO2Wbe9sjX58Mmsq2Wk3dvL09CNCl9tQmAeNXKfhsfAVWo9a784JHsIv_0xIG-tt5x9ZHFEwlUBaVx6Qhw1RyHvBRk0cLTG0jOolDk8-6CAwOttWLnu50UMxgr33Fz3RrDpoYlevWDRHj00WF6MTRTv5eYiA",
      date: "June 22, 2024",
    },
    {
      id: "5",
      artDirectorName: "Name : Stacksnova",
      artDirectorId: "ID No :123",
      movieName: "Movie Name - Leo",
      amountReceived: "Amount Received - 5,00,000",
      amountPaidForAssociation: "Amount Paid For Associaion - 100000",
      image:
        "https://lh4.googleusercontent.com/proxy/_R-Ov6AKbYCbJBM3o_b946i1oO2Wbe9sjX58Mmsq2Wk3dvL09CNCl9tQmAeNXKfhsfAVWo9a784JHsIv_0xIG-tt5x9ZHFEwlUBaVx6Qhw1RyHvBRk0cLTG0jOolDk8-6CAwOttWLnu50UMxgr33Fz3RrDpoYlevWDRHj00WF6MTRTv5eYiA",
      date: "June 22, 2024",
    },
    {
      id: "6",
      artDirectorName: "Name : Stacksnova",
      artDirectorId: "ID No :123",
      movieName: "Movie Name - Leo",
      amountReceived: "Amount Received - 5,00,000",
      amountPaidForAssociation: "Amount Paid For Associaion - 100000",
      image:
        "https://lh4.googleusercontent.com/proxy/_R-Ov6AKbYCbJBM3o_b946i1oO2Wbe9sjX58Mmsq2Wk3dvL09CNCl9tQmAeNXKfhsfAVWo9a784JHsIv_0xIG-tt5x9ZHFEwlUBaVx6Qhw1RyHvBRk0cLTG0jOolDk8-6CAwOttWLnu50UMxgr33Fz3RrDpoYlevWDRHj00WF6MTRTv5eYiA",
      date: "June 22, 2024",
    },
  ];
  const renderItems = ({ item }) => (
    <Cards
      BigText={item.name}
      SmallText={item.role}
      xSmallText={item.location}
      PATH="spotDetails"
      flag={true}
    />
  );
  return (
    <SafeAreaView className="h-full w-full">
      <Header />
      <FlatList
        data={[""]}
        renderItem={() => (
          <>
            <View className="p-5 w-full rounded-xl my-2 bg-slate-50 shadow-lg shadow-orange-400  flex-row justify-between items-center">
              <Text className="color-black items-center text-center   text-2xl mx-16 font-base ">
                Upcoming Events
              </Text>
            </View>
            <View className="w-full" style={styles.container}>
              <FlatList
                data={events}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
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
            <View className="p-5 w-full rounded-xl my-2 bg-slate-50 shadow-lg shadow-orange-400  flex-row justify-between items-center">
              <Text className="items-center text-center w-full  text-2xl ">
                Payments
              </Text>
            </View>
            <View className="w-full" style={styles.container}>
              <FlatList
                data={payments}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                renderItem={({ item }) => (
                  <Card>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={styles.title}>{item.artDirectorName}</Text>
                    <Text style={styles.title}>{item.artDirectorId}</Text>
                    <Text style={styles.title}>{item.movieName}</Text>
                    <Text style={styles.subTitle}>{item.amountReceived}</Text>
                    <Text style={styles.subTitle}>
                      {item.amountPaidForAssociation}
                    </Text>
                    <Text style={styles.date}>{item.date}</Text>
                  </Card>
                )}
              />
            </View>
            <View className="p-5 w-full rounded-xl my-2 bg-slate-50 shadow-lg shadow-orange-400  flex-row justify-between items-center">
              <Text className="items-center text-center w-full text-2xl ">
                Recent Locations
              </Text>
            </View>
            <View>
              <FlatList
                data={recentLocations}
                renderItem={renderItems}
                horizontal={false}
                decelerationRate="normal"
                className="m-4"
                showsVerticalScrollIndicator={false}
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
    width: "100%",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    width: 280,
    padding: 5,
  },
  subTitle: {
    fontSize: 17,
    fontWeight: "bold",
    width: 280,
    padding: 5,
  },
  date: {
    fontSize: 16,
    color: "gray",
    padding: 5,
  },
});

export default home;
