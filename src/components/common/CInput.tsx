import React from "react"

interface IProps {
    name: string,
    label?:string,
    value: string,
    error: string,
    type?: string
    disabled?: boolean,
    onChange: (key: string, val: string) => void,
    onBlur?: (k: string, o: string, required: boolean, validator?: (val: string) => string) => void
    validator?: (val: string) => string,
    required?: boolean
}

const CInput: React.FC<IProps> = React.memo(({ name, label, value, error, type="text", disabled=false, onChange, onBlur, validator, required=true }) => {
    return (
        <React.Fragment>
            { label && <label>{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                disabled={disabled}
                onChange={e => onChange(e.target.name, e.target.value)}
                onBlur={e => onBlur && onBlur(name, value, required, validator)}
            />
            {
                error &&
                    <span>{error}</span>
            }
        </React.Fragment>
    )
})

export default CInput;