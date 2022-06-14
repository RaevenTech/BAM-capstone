import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "0", name: "Jake", email: "123@abc.com" },
    { id: "1", name: "Lucy", email: "123@abc.com" },
    { id: "2", name: "John", email: "123@abc.com" },
    { id: "3", name: "Mary", email: "123@abc.com" },
    { id: "4", name: "Peter", email: "123@abc.com" },
];

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export const selectAllUserData = (state) => state.user;
//export const { userAdded } = userSlice.actions;
export default userSlice.reducer;
