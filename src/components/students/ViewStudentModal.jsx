import Modal from "../common/Modal";
import "../../styles/ViewStudentModal.css";

function ViewStudentModal({
    show,
    student,
    onClose
}) {

    if (!show || !student) return null;

    return (
        <div className="modal-overlay">

            <div className="view-modal">

                <div className="modal-header">

                    <h3>Student Information</h3>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        &times;
                    </button>

                </div>

                <div className="modal-body">

                    <div className="info-section">

                        <h5 className="section-title">
                            Personal Information
                        </h5>

                        <div className="row">

                            <div className="col-md-6">

                                <p>
                                    <strong>Student ID:</strong> {student.id}
                                </p>

                                <p>
                                    <strong>Full Name:</strong> {student.name}
                                </p>

                            </div>

                            <div className="col-md-6">

                                <p>
                                    <strong>Course:</strong> {student.course}
                                </p>

                                <p>
                                    <strong>Year Level:</strong> {student.year}
                                </p>

                                <p>
                                    <strong>Status:</strong> {student.status}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="modal-footer">

                    <button
                        className="btn close-modal-btn"
                        onClick={onClose}
                    >
                        Close
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ViewStudentModal;