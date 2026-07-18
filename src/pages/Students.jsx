import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import StudentToolbar from "../components/students/StudentToolbar";
import StudentTable from "../components/students/StudentTable";
import AddStudentModal from "../components/students/AddStudentModal";
import ViewStudentModal from "../components/students/ViewStudentModal";
import Modal from "../components/common/Modal";

import "../styles/Students.css";
import "../styles/dashboard.css";

function Students() {
    const [showFormModal, setShowFormModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);

    const [students, setStudents] = useState([
        { id: "20260001", name: "Juan Dela Cruz", course: "BSIT", year: "3rd Year", status: "Active" },
        { id: "20260002", name: "Maria Santos", course: "BSBA", year: "2nd Year", status: "Active" },
        { id: "20260003", name: "Pedro Reyes", course: "BSHM", year: "1st Year", status: "Inactive" }
    ]);

    const handleAddClick = () => {
        setSelectedStudent(null);
        setIsEditMode(false);
        setShowFormModal(true);
    };

    const handleEditClick = (student) => {
        setSelectedStudent(student);
        setIsEditMode(true);
        setShowFormModal(true);
    };

    const handleDeleteClick = (student) => {
        setSelectedStudent(student);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        if (selectedStudent) {
            setStudents(students.filter(s => s.id !== selectedStudent.id));
            setShowDeleteModal(false);
            setSelectedStudent(null);
        }
    };

    const handleViewClick = (student) => {
        setSelectedStudent(student);
        setShowViewModal(true);
    };

    return (
        <div className="dashboard-container">
            <Sidebar />

            <main className="dashboard-content">
                <Header title="Students" subtitle="Manage all student records." />

                <div className="student-content">
                    <StudentToolbar onAddStudent={handleAddClick} />

                    <StudentTable
                        students={students}
                        onView={handleViewClick}
                        onEdit={handleEditClick}
                        onDelete={handleDeleteClick}
                    />
                </div>
            </main>

            <AddStudentModal
                show={showFormModal}
                onClose={() => setShowFormModal(false)}
                student={selectedStudent}
                isEditMode={isEditMode}
            />

            <ViewStudentModal
                show={showViewModal}
                student={selectedStudent}
                onClose={() => setShowViewModal(false)}
            />

            <Modal
                show={showDeleteModal}
                title="Delete Student Record"
                onClose={() => setShowDeleteModal(false)}
                width="450px"
                footer={
                    <>
                        <button className="cancel-btn" onClick={() => setShowDeleteModal(false)}>
                            Cancel
                        </button>
                        <button className="btn btn-danger px-3 py-2 fw-semibold" onClick={confirmDelete}>
                            Delete Record
                        </button>
                    </>
                }
            >
                <div className="text-center p-3">
                    <i className="bi bi-exclamation-triangle-fill text-danger fs-1 mb-3 d-block"></i>
                    <p className="mb-1 fw-bold fs-5 text-dark">Are you absolutely sure?</p>
                    <p className="text-muted mb-0">
                        This action will permanently delete the profile record for <strong>{selectedStudent?.name}</strong> ({selectedStudent?.id}). This action cannot be undone.
                    </p>
                </div>
            </Modal>
        </div>
    );
}

export default Students;