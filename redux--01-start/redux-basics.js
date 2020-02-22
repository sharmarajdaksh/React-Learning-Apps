const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reduce
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    else if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    else if (action.type === 'DEC_COUNTER') {
        return {
            ...state,
            counter: state.counter - 1
        };
    }
    else if (action.type === 'SUB_COUNTER') {
        return {
            ...state,
            counter: state.counter - action.value
        };
    }
    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscriptions
store.subscribe(() => {
    console.log('[SUBSCRIPTION] ', store.getState());
});

// Dispatching Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 12 });
store.dispatch({ type: 'DEC_COUNTER' });
store.dispatch({ type: 'SUB_COUNTER', value: 17 });
console.log(store.getState());