export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export const addThousandSeparators = (number) => {
    if (number === null || number === undefined) return '0';
    const [intergerPart, decimalPart] = number.toString().split('.');
    return intergerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (decimalPart ? `.${decimalPart}` : '');
}

