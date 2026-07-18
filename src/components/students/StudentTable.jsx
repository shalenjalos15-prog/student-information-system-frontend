import "../../styles/StudentTable.css";

function StudentTable({ students, onView, onEdit, onDelete }) {
    return (
        <div className="student-table-card">
            <table className="table align-middle">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Full Name</th>
                        <th>Course</th>
                        <th>Year Level</th>
                        <th>Status</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.course}</td>
                            <td>{student.year}</td>
                            <td>
                                <span className={student.status === "Active" ? "badge bg-success" : "badge bg-secondary"}>
                                    {student.status}
                                </span>
                            </td>
                            <td className="text-center">
                                <button 
                                    className="btn btn-sm btn-outline-primary me-2" 
                                    onClick={() => onView(student)}
                                >
                                    <i className="bi bi-eye-fill"></i>
                                </button>

                                <button 
                                    className="btn btn-sm btn-outline-warning me-2"
                                    onClick={() => onEdit(student)}
                                >
                                    <i className="bi bi-pencil-fill"></i>
                                </button>

                                <button 
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => onDelete(student)}
                                >
                                    <i className="bi bi-trash-fill"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentTable;