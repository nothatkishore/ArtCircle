import { Stack } from "expo-router";

const SearchLayout = () =>
{
    return(

        <Stack>
            <Stack.Screen name="search" options={{headerShown : false}} />
            <Stack.Screen name="searchLocation" options={{headerShown : false}} />
            <Stack.Screen name="searchProducts" options={{headerShown : false}} />
        </Stack>
    )
}

export default SearchLayout