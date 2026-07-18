import Modal from "../common/Modal";
import Button from "../common/Button";
import InputField from "../common/InputField";

function AddCourseModal({ show, onClose }) {

    if (!show) return null;

    return (

        <Modal
            show={show}
            title="Add New Course"
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
                        Save Course
                    </Button>
                </>
            }
        >

            <div className="row">

                <InputField
                    label="Course Code"
                    placeholder="e.g. BSIT"
                    required
                    col="4"
                />

                <InputField
                    label="Course Name"
                    placeholder="Bachelor of Science in Information Technology"
                    required
                    col="8"
                />

                <InputField
                    label="Description"
                    placeholder="Enter course description"
                    required
                    col="12"
                />

            </div>

        </Modal>

    );

}

export default AddCourseModal;