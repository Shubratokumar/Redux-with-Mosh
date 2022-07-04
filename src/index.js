import configureStore from './store/configureStore';
import * as actions from "./store/bugs";

const store = configureStore();

const unsubscribe = store.subscribe(()=>{
    console.log("Store changed!", store.getState());
})

// add bug
store.dispatch(actions.bugAdded({ description: "Bug 1"}));
store.dispatch(actions.bugAdded({ description: "Bug 2"}));
store.dispatch(actions.bugAdded({ description: "Bug 3"}));

// render one time every time
unsubscribe();
// remove bug
store.dispatch(actions.bugRemoved({id: 2}));
// resolve bug
store.dispatch(actions.bugResolved({id: 1}));
/* store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
        id: 1
    }
}) */


console.log(store.getState());