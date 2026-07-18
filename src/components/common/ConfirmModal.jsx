import Modal from "./Modal";
import Button from "./Button";

function ConfirmModal({
    show,
    onClose,
    onConfirm,
    title = "Confirm Action",
    message = "Are you sure you want to continue?"
}) {

    if (!show) return null;

    return (
        <Modal
            show={show}
            title={title}
            onClose={onClose}
            width="450px"
            footer={
                <>
                    <Button
                        variant="secondary"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="danger"
                        onClick={onConfirm}
                    >
                        Delete
                    </Button>
                </>
            }
        >
            <p style={{ marginBottom: 0 }}>
                {message}
            </p>
        </Modal>
    );
}

export default ConfirmModal;