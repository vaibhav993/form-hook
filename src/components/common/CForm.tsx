import React, { useCallback }from "react"
import { useForm } from "../../hooks/useForm"

type TRenderProps = {
    values: any,
    errors: any,
    isValid: boolean,
    onChange: (k: string, o: string) => void,
    onBlur: (k: string, o: string, required: boolean, validator?: (val: string) => string) => void
}
interface IProps {
    initialValues: object,
    onSubmit?: () => void
    render: (props: TRenderProps) => React.ReactNode,
}

const CForm: React.FC<IProps> = React.memo(({ initialValues, render, onSubmit }) => {
    const { values, errors, isValid, onChange, onBlur } = useForm(initialValues);
    console.log(values);
    console.log(errors);
    const submit: (e: React.FormEvent<HTMLFormElement>) => void = (e) => {
        e.preventDefault();
        onSubmit && onSubmit();
    };


    return (
        <form onSubmit={submit}>
            {render({
                values,
                errors,
                isValid,
                onChange,
                onBlur
            })}
        </form>
    )
})

export default CForm;
