import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from '../redux/store'

const RootLayout = () => {
    return (

        <>
            <Provider store={store}>
                <Stack>
                    <Stack.Screen name="index" options={{ headerShown: false }} />
                    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                    <Stack.Screen name="(main)" options={{ headerShown: false }} />
                    <Stack.Screen name="(profile)" options={{ headerShown: false }} />
                </Stack>
                <StatusBar style="light" backgroundColor="#0000" />
            </Provider>
        </>

    )
}

export default RootLayout