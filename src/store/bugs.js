import { createSlice} from '@reduxjs/toolkit';
// Action types
/* const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved"; */
let lastId = 0;
// createSlice 
const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        // actions => action handlers
        bugAdded : (bugs, action) =>{
            bugs.push({
                id: ++ lastId,
                description: action.payload.description,
                resolved: false
            });
        },
        bugRemoved : (bugs, action) =>{
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        },
        bugResolved : (bugs, action) =>{
            bugs.filter( bug => bug.id !== action.payload.id)
        }
    }
})

export const { bugAdded, bugRemoved, bugResolved } = slice.actions;

export default slice.reducer;

/* // Action creators
// with arrow function
export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");

// Reducer


// call createReducer function
export default createReducer([], {
    [ bugAdded.type ] : (bugs, action) =>{
        bugs.push({
            id: ++ lastId,
            description: action.payload.description,
            resolved: false
        });
    },
    [ bugResolved.type ] : (bugs, action) =>{
        const index = bugs.findIndex(bug => bug.id === action.payload.id);
        bugs[index].resolved = true;
    },
    [ bugRemoved.type ] : (bugs, action) =>{
        bugs.filter( bug => bug.id !== action.payload.id)
    }
})
 */

// reducer 
/* export default function reducer( state = [], action ) {
    // switch case statement
    switch (action.type){
        case bugAdded.type :
            return [
                ...state,
                {
                    id: ++ lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ]
        case bugRemoved.type :
            return state.filter( bug => bug.id !== action.payload.id);

        case bugResolved.type : 
            return state.map(bug => 
                bug.id !== action.payload.id ? bug : {...bug, resolved: true}
            );
        default:
            return state;
    }
} */