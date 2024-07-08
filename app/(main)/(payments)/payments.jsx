import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { View, Text, ScrollView } from "react-native";
import ClickOption from "../../../components/ClickOption";
import renew from '../../../assets/icons/renewal.png'
import loan from '../../../assets/icons/loan.png'
import payment from '../../../assets/icons/payments.png'
import { router } from "expo-router";

const payments = () => {
  return (
    <>
      <SafeAreaView className="w-full h-full bg-[#f0f3f6]">
        <Header />
        <ScrollView>
          <View className="w-full h-full mt-7">
            <ClickOption
              name='Membership renewal'
              icon={renew}
              handlePress={() => router.push('/memRenew')}
            />
            <ClickOption
              name='Project commission'
              icon={payment}
              handlePress={() => router.push('/projComission')}
            />
            <ClickOption
              name='Loan details'
              icon={loan}
              handlePress={() => router.push('/loan')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default payments;
