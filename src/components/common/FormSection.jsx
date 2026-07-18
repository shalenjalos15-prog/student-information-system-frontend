function FormSection({
    title,
    children
}) {

    return (

        <section className="mb-4">

            <h5 className="section-title">

                {title}

            </h5>

            <div className="row">

                {children}

            </div>

        </section>

    );

}

export default FormSection;