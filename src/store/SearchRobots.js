import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'SearchRobots',
    initialState: {
        searchField: ''
    },
    reducers: {
        setSearchField: (state, action) => {
            state.searchField = action.payload
        }
    }
});
export const { setSearchField } = slice.actions;
export default slice.reducer;