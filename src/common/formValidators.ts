export const validName: (o: string) => boolean = (value) => {
    return /^[a-zA-Z\s]+$/.test(value.trim());
}

export const validEmail: (o: string) => boolean = (value) => {
    return /^([0-9a-zA-Z]([-.+\w]*[0-9a-zA-Z])*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?))$/.test(
        value
    );
}

export const validPhoneNumber: (o: string) => boolean = (value) => {
    return /^[ 0-9+-]+$/.test(value.trim());
}

export const validNumber: (o: string) => boolean = (value) => {
    return /^\d+$/.test(value);
}


// const validate = (val, rules) => {

// }

// [
//     max
// ]