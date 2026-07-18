function InputField({
    label,
    type = "text",
    placeholder = "",
    value,
    onChange,
    name,
    icon,
    readOnly = false,
    disabled = false,
    required = false,
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

            <div className="input-group">

                {icon && (

                    <span className="input-group-text">

                        <i className={`bi ${icon}`}></i>

                    </span>

                )}

                <input
                    type={type}
                    className={`form-control ${error ? "is-invalid" : ""}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                    readOnly={readOnly}
                    disabled={disabled}
                />

                {error && (

                    <div className="invalid-feedback">

                        {error}

                    </div>

                )}

            </div>

        </div>

    );

}

export default InputField;