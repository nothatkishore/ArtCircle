import { Stack } from "expo-router";

const SearchLayout = () =>
{
    return(

        <Stack>
            <Stack.Screen name="search" options={{headerShown : false}} />
            <Stack.Screen name="searchLocation" options={{headerShown : false}} />
            <Stack.Screen name="searchProducts" options={{headerShown : false}} />
            <Stack.Screen name="spots" options={{headerShown : false}} />
            <Stack.Screen name="spotDetails" options={{headerShown : false}} />
            <Stack.Screen name="products" options={{headerShown : false}} />
            <Stack.Screen name="productDetails" options={{headerShown : false}} />

        </Stack>
    )
}

export default SearchLayout