
const combineReducers = (reducers) => {
    return (state, action) => {
        const newState = {};
        Object.keys(reducers).forEach(r => {
            let reducerState = state[r];
            reducerState = reducers[r](reducerState, action);
            newState[r] = reducerState;
        });
        return newState;
    }
}

export default combineReducers;