import { Stack } from "expo-router";

const AuthLayout = () =>
{
  return(
    <Stack>
      <Stack.Screen name="signIn" options={{headerShown : false}} />
      <Stack.Screen name="forgotPass" options={{headerShown : false}} />
      <Stack.Screen name="OTP" options={{headerShown : false}} />
      <Stack.Screen name="CreatePass" options={{headerShown : false}} />
    </Stack>
  )
}

export default AuthLayout