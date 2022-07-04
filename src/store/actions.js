import * as actions from '../actionTypes';

// with arrow function
export const bugAdded = description => {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description
        }
    }
}

export const bugRemoved = id => ({
    type: actions.BUG_REMOVED,
    payload: {
        id
    }
});

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id
    }
})
// basic function examples
/*  export default function bugAdded (description) {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description: description
        }
    }
} */