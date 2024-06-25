import { Stack } from "expo-router";

const CreateLayout = () =>
{
  return(
    <Stack>
      <Stack.Screen name="create" options={{headerShown : false}} />
      <Stack.Screen name="addMember" options={{headerShown : false}} />
      <Stack.Screen name="addMovies" options={{headerShown : false}} />
      <Stack.Screen name="addSetprops" options={{headerShown : false}} />
      <Stack.Screen name="write" options={{headerShown : false}} />
    </Stack>
  )
}

export default CreateLayout