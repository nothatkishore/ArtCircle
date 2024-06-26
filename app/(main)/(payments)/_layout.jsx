import { Stack } from "expo-router"

const PaymentLayout = () => {
  return (
    <Stack>
           <Stack.Screen name="payments" options={{headerShown : false}}/>
        <Stack.Screen name="membershipRenewal" options={{headerShown: false}}/>
        <Stack.Screen name="workPayments" options={{headerShown: false}} />
        <Stack.Screen name="loan" options={{headerShown : false}} />
    </Stack>
  )
}

export default PaymentLayout