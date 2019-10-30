import React from "react"
import { useHistory } from "react-router-dom";

interface IProps {
    isAuthenticated: boolean,
    signOut: (cb: () => void) => void,
} 

const Logout : React.FC<IProps> = ({ isAuthenticated, signOut }) => {
    let history = useHistory();
    let onSignOut = () => {
        signOut(() => {
            history.push("/");
        });
    };
    return !isAuthenticated 
        ? null
        : (
            <button onClick={onSignOut}>Logout</button>
        )
}

  export default Logout;