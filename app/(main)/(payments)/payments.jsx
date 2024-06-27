import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { View, Text, ScrollView } from "react-native";
import ClickOption from "../../../components/ClickOption";
import placeHolder from '../../../assets/icons/setP.png'
import { router } from "expo-router";

const payments = () => {
  return (
    <>
      <SafeAreaView className="w-full h-full bg-[#f0f3f6]">
        <Header />
        <ScrollView>
          <View className="w-full h-full">
            <ClickOption
              name='Membership renewal'
              icon={placeHolder}
              handlePress={() => router.push('/membershipRenewal')}
            />
            <ClickOption
              name='Project commission'
              icon={placeHolder}
              handlePress={() => router.push('/workPayments')}
            />
            <ClickOption
              name='Loan details'
              icon={placeHolder}
              handlePress={() => router.push('/loan')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default payments;
