import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const userSlice = createSlice({
    name: "user details",
    initialState: {
        profile: null,
        name: '',
        designation: ''
    },

    reducers:
    {
        setProfile: (state, action) => {
            state.profile = action.payload
            console.log('Profile changed')
        },

        setName: (state, action) => {
            state.name = action.payload
            console.log('Name updated')
        },

        setDesignation: (state, action) => {
            state.designation = action.payload
            console.log('Designation updated')
        }
    }
})

export const { setProfile, setName, setDesignation } = userSlice.actions
export default userSlice.reducer