// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "user",
//   initialState: { user: null },
//   reducers: {
//     setUser: (state, action) => { state.user = action.payload; },
//     clearUser: (state) => { state.user = null; },
//   },
// });

// export const { setUser, clearUser } = userSlice.actions;
// export default userSlice.reducer;
// features/userSlice.js

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: null,
// };

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//     },
//     clearUser: (state) => {
//       state.user = null;
//     },
//   },
// });

// export const { setUser, clearUser } = userSlice.actions;

// export const selectUser = (state) => state.user.user;

// export default userSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';

// export const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     user: null,
//   },
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//     },
//   },
// });

// export const { setUser } = userSlice.actions;
// export default userSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;



