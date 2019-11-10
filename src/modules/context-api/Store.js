import React, { useReducer, useEffect } from 'react';
import { publish } from './storeHelpers';
import DispatchContext from './DispatchContext';


export default function Store(props) {
    const initialState = props.rootReducer(props.initialValue || {}, { type: '__INIT__' });
    const [state, dispatch] = useReducer(props.rootReducer, initialState);
    
    useEffect(() => {
        publish(state);
    }, [state]);
    
    return (
        <DispatchContext.Provider value={dispatch}>
            {props.children}
        </DispatchContext.Provider>
    );
}