function SelectField({
    label,
    name,
    value,
    onChange,
    options = [],
    placeholder = "Select",
    required = false,
    disabled = false,
    error = "",
    col = "12"
}) {

    return (

        <div className={`col-md-${col} mb-3`}>

            <label className="form-label">

                {label}

                {required && (
                    <span className="text-danger"> *</span>
                )}

            </label>

            <select
                className={`form-select ${error ? "is-invalid" : ""}`}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
            >

                <option value="">

                    {placeholder}

                </option>

                {options.map((option) => (

                    <option
                        key={option}
                        value={option}
                    >

                        {option}

                    </option>

                ))}

            </select>

            {error && (

                <div className="invalid-feedback">

                    {error}

                </div>

            )}

        </div>

    );

}

export default SelectField;