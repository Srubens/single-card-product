export const options = ["DMR", "XPTO", "XPTY", "Outros"];

export const generateAmountOptions = (number) => {
    return Array.from({ length: number }, (_, index) => {
        const amount = index + 1;
        return (
            <option key={amount} value={amount}>
                {options[index]}
            </option>
        );
    });
};

export const formatPrice = (price) =>{
    const realAmount = new Intl.NumberFormat(
        'pt-BR',
        {
            style:'currency',
            currency:'BRL'
        }
    ).format(price.toFixed(2))
    return realAmount
}
