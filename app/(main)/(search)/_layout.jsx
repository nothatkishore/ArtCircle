import { Stack } from "expo-router";

const SearchLayout = () =>
{
    return(

        <Stack>
            <Stack.Screen name="search" options={{headerShown : false}} />
            <Stack.Screen name="searchLocation" options={{headerShown : false}} />
            <Stack.Screen name="searchStores" options={{headerShown : false}} />
            <Stack.Screen name="searchProduct" options={{headerShown : false}} />
            <Stack.Screen name="spotDetails/[query]" options={{headerShown : false}} />
            <Stack.Screen name="shopDetails/[query]" options={{headerShown : false}} />
            <Stack.Screen name="productSpecs/[query]" options={{headerShown : false}} />
        </Stack>
    )
}

export default SearchLayout