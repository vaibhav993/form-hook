import { useState, useCallback } from "react"


export const useLogin = (initialstate: boolean) => {
    const [ isAuthenticated, setAuthentication ] = useState(initialstate);

    const authenticate: (cb: () => void) => void = useCallback((cb) => {
        setAuthentication(true);
        setTimeout(cb, 100);
    }, [isAuthenticated]);

    const signout: (cb: () => void) => void = useCallback((cb) => {
        setAuthentication(false);
        setTimeout(cb, 100);
    }, [isAuthenticated])

    return {
        isAuthenticated,
        authenticate,
        signout
    }
}