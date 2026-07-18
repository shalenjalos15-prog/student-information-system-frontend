import Modal from "../common/Modal";
import Button from "../common/Button";
import InputField from "../common/InputField";

function EditCourseModal({ show, onClose }) {

    if (!show) return null;

    return (
        <Modal
            show={show}
            title="Edit Course"
            onClose={onClose}
            width="600px"
            footer={
                <>
                    <Button
                        variant="secondary"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="primary"
                    >
                        Update Course
                    </Button>
                </>
            }
        >
            <div className="row">

                <InputField
                    label="Course Code"
                    placeholder="BSIT"
                    col="4"
                />

                <InputField
                    label="Course Name"
                    placeholder="Bachelor of Science in Information Technology"
                    col="8"
                />

                <InputField
                    label="Description"
                    placeholder="Course Description"
                    col="12"
                />

            </div>

        </Modal>
    );
}

export default EditCourseModal;