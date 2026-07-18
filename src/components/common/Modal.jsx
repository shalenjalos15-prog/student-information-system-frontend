import "../../styles/Modal.css";

function Modal({
    show,
    title,
    children,
    footer,
    onClose,
    width = "950px"
}) {

    if (!show) return null;

    return (

        <div className="modal-overlay">

            <div
                className="custom-modal"
                style={{ maxWidth: width }}
            >

                <div className="modal-header">

                    <h3>{title}</h3>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        &times;
                    </button>

                </div>

                <div className="modal-body">

                    {children}

                </div>

                {footer && (

                    <div className="modal-footer">

                        {footer}

                    </div>

                )}

            </div>

        </div>

    );

}

export default Modal;