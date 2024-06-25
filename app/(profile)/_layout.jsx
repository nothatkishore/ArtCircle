import { Stack } from "expo-router";

const profileLayout = () =>
{
    return(
        <Stack>
            <Stack.Screen name="profile" options={{headerShown : false}} />
            <Stack.Screen name="notification" options={{headerShown : false}} />
        </Stack>
    )
}

export default profileLayout