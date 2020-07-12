import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'Robots',
    initialState: {
        isPending: true,
        robots: [],
        error: ''
    },
    reducers: {
        robotsRequested: (state, action) => {
            state.isPending = true;
        },

        robotsRecieved: (state, action) => {
            state.robots = action.payload;
            state.isPending = false;
            state.error = '';
        },

        robotsRequestError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { robotsRequested, robotsRecieved, robotsRequestError } = slice.actions;
export default slice.reducer;
