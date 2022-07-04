import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;
const slice =  createSlice({
    name: "projects",
    initialState: [],
    reducers: {
        // action => action handler
        projectsAdded: (projects, action)=>{
            projects.push({
                id: ++lastId,
                name: action.payload.name
            })
        }

    }
})

export const { projectsAdded } = slice.actions;
export default slice.reducer;