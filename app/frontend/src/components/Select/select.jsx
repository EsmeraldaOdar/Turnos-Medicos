
function Select({ options, value, onChange, placeholder }) {
    return (
        <select value={value} onChange={onChange} className="select-component">
            <option value="" disabled hidden>{placeholder}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
export default Select;