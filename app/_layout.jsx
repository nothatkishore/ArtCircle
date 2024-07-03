import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import userDetails from "../context/userDetails";

const RootLayout = () =>
{
    return(

        <>
            <userDetails>
                <Stack>
                    <Stack.Screen name="index" options={{headerShown : false}} />
                    <Stack.Screen name="(auth)" options={{headerShown : false}} />
                    <Stack.Screen name="(main)" options={{headerShown : false}} />
                    <Stack.Screen name="(profile)" options={{headerShown : false}} />
                </Stack>
            </userDetails>
            <StatusBar style="light" backgroundColor="#ffa629"/>
        </>

    )
}

export default RootLayout