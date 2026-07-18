function DateField({
    label,
    name,
    value,
    onChange,
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

            <input
                type="date"
                className={`form-control ${error ? "is-invalid" : ""}`}
                name={name}
                value={value}
                onChange={onChange}
            />

            {error && (

                <div className="invalid-feedback">

                    {error}

                </div>

            )}

        </div>

    );

}

export default DateField;