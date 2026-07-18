import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import AddCourseModal from "../components/courses/AddCourseModal";
import EditCourseModal from "../components/courses/EditCourseModal";
import ConfirmModal from "../components/common/ConfirmModal";

import "../styles/dashboard.css";
import "../styles/Courses.css";

function Courses() {

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const courses = [
        {
            code: "BSIT",
            name: "Bachelor of Science in Information Technology",
            description: "Information Technology Program"
        },
        {
            code: "BSBA",
            name: "Bachelor of Science in Business Administration",
            description: "Business Program"
        },
        {
            code: "BSHM",
            name: "Bachelor of Science in Hospitality Management",
            description: "Hospitality Program"
        }
    ];

    return (

        <div className="dashboard-container">

            <Sidebar />

            <main className="dashboard-content">

                <Header
                    title="Courses"
                    subtitle="Manage all available courses."
                />

                <div className="table-card">

                    <div className="table-header">

                        <h4>Course List</h4>

                        <button
                            className="btn btn-primary"
                            onClick={() => setShowModal(true)}
                        >
                            <i className="bi bi-plus-lg me-2"></i>

                            Add Course

                        </button>

                    </div>

                    <div className="search-box mb-3">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search course..."
                        />

                    </div>

                    <table className="table table-hover align-middle">

                        <thead>

                            <tr>

                                <th>Course Code</th>

                                <th>Course Name</th>

                                <th>Description</th>

                                <th width="170">Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {courses.map((course) => (

                                <tr key={course.code}>

                                    <td>{course.code}</td>

                                    <td>{course.name}</td>

                                    <td>{course.description}</td>

                                    <td>

                                        <button
                                            className="btn btn-warning btn-sm"
                                            onClick={() => setShowEditModal(true)}
                                        >
                                            Edit
                                        </button>

                                        <ConfirmModal 
                                            show={showDeleteModal}
                                            title="Delete Course"
                                            message="Are you sure you want to delete this course? This action cannot be undone."
                                            onClose={() => setShowDeleteModal(false)}
                                            onConfirm={() => {
                                                setShowDeleteModal(false);
                                            }}
                                        />

                                       <button
                                           className="btn btn-danger btn-sm ms-2"
                                           onClick={() => setShowDeleteModal(true)}
                                       >
                                        Delete
                                       </button>
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </main>

            <AddCourseModal
                show={showModal}
                onClose={() => setShowModal(false)}
            />

            <EditCourseModal 
                show={showEditModal}
                onClose={() => setShowEditModal(false)}
            />

        </div>

    );

}

export default Courses;