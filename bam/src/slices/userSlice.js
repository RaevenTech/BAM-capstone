import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "0", name: "Jake" },
    { id: "1", name: "Lucy" },
    { id: "2", name: "John" },
    { id: "3", name: "Mary" },
    { id: "4", name: "Peter" },
];

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export const selectAllUserData = (state) => state.user;
//export const { userAdded } = userSlice.actions;
export default userSlice.reducer;
