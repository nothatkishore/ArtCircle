import { Stack } from "expo-router"

const PaymentLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="payments" options={{ headerShown: false }} />
      <Stack.Screen name="memRenew" options={{ headerShown: false }} />
      <Stack.Screen name="projComission" options={{ headerShown: false }} />
      <Stack.Screen name="loan" options={{ headerShown: false }} />
    </Stack>
  )
}

export default PaymentLayout