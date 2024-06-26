import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { View, Text, ScrollView } from "react-native";
import Card from "../../../components/Card";

const payments = () => {
  return (
    <>
    <SafeAreaView className="w-full h-full bg-black">
      <Header />
      <ScrollView>
        <View className="w-full h-full">
        <Card 
        BigText='Membership Renewal'
        SmallText='You can renewe your membership here ' 
        xSmallText='Quick Renewal'
        PATH="membershipRenewal" />
        <Card 
        BigText='Loan'
        SmallText='You can apply for loan ' 
        xSmallText='Quick Loan'
        PATH="loan" />
        <Card 
        BigText='Work Payments'
        SmallText='You can upload your work payments' 
        xSmallText='Upload'
        PATH="workPayments" />
        </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
};

export default payments;
