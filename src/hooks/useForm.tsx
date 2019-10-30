import { useReducer, useCallback } from "react"

interface IAction {
    type: string,
    key: string,
    value: string
}

const getInitialState = (initialValues: object) =>  ({
    data: initialValues,
    errors: Object.keys(initialValues).reduce((acc,val) => ({...acc, [val]: ""}), {}),
    isValid: false
})

const reducer = (state: any, action:IAction) => {
    switch(action.type){
        case "CHANGE": return {
            ...state,
            data: {
                ...state.data,
                [action.key]: action.value
            }
        }
        case "BLUR": return {
            ...state,
            errors: {
                ...state.errors,
                [action.key]: action.value
            },
            isValid: !Object.values(state.errors).reduce((a,v) => v, false)
        }
        default:
            return state;
    }
}

export const useForm = (initialValues: any) => {
    const [state, dispatch] = useReducer(reducer, getInitialState(initialValues));
    
    const onChange: (key: string, val: string)=> void = useCallback((key, value) => {
        dispatch({
            type: "CHANGE",
            key: key, 
            value: value
        })
    }, []);
    
    const onBlur: (key: string, val: string, required: boolean, validator?: (val: string) => string)=> void = useCallback((key, value, required, validator) => {
        dispatch({
            type: "BLUR",
            key: key,
            value: value.trim().length > 0
                ? validator ? validator(value) : ""
                : required ? "This is required field" : ""
        })
    }, []);

    return {
        values: state.data,
        errors: state.errors,
        isValid: state.isValid,
        onChange,
        onBlur
    }
}