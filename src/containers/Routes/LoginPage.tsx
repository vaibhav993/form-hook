import React from "react"
import { useHistory, useLocation } from "react-router-dom";
import CForm from "../../components/common/CForm"
import CInput from "../../components/common/CInput"

interface IProps {
    login: (cb: () => void) => void,
} 

const LoginPage : React.FC<IProps> = React.memo(({ login }) => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const onLogin: () => void = () => {
        login(() => {
            history.replace(from);
        });
    };
    
    return (
        <CForm
            initialValues={{"name":"", "password": ""}}
            onSubmit={onLogin}
            render={({values, errors, isValid, onChange, onBlur }) => {
                return (
                    <React.Fragment>
                        <CInput
                            name="name"
                            label="Name: "
                            value={values.name}
                            error={errors.name}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                        <CInput
                            name="password"
                            label="Password: "
                            type="password"
                            value={values.password}
                            error={errors.password}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                        <input 
                            type="submit"
                            value="Login"
                            disabled={!isValid}
                        /> 
                    </React.Fragment>
                )
            }}
        >

        </CForm>
        // <form onSubmit={onLogin} >
        //     <CInput
        //         name="name"
        //         value={values.name}
        //         onChange={onChange}
        //     />
        //     <CInput
        //         name="password"
        //         type="password"
        //         value={values.password}
        //         onChange={onChange}
        //     />
        //     <input type="submit" value="Login"/> 
        // </form>
    );
})

export default LoginPage;