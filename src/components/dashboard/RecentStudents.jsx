import "../../styles/RecentStudents.css";

function RecentStudents() {

    const students = [
        {
            id: "20260001",
            name: "Juan Dela Cruz",
            course: "BSIT",
            year: "3rd Year",
            status: "Active"
        },
        {
            id: "20260002",
            name: "Maria Santos",
            course: "BSBA",
            year: "2nd Year",
            status: "Active"
        },
        {
            id: "20260003",
            name: "Pedro Reyes",
            course: "BSTM",
            year: "1st Year",
            status: "Inactive"
        }
    ];

    return (

        <div className="recent-students">

            <div className="table-header">

                <h3>Recent Students</h3>

                <button className="btn btn-primary">
                    View All
                </button>

            </div>

            <table className="table align-middle">

                <thead>

                    <tr>
                        <th>Student ID</th>
                        <th>Full Name</th>
                        <th>Course</th>
                        <th>Year Level</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        students.map((student) => (

                            <tr key={student.id}>

                                <td>{student.id}</td>

                                <td>{student.name}</td>

                                <td>{student.course}</td>

                                <td>{student.year}</td>

                                <td>

                                    <span
                                        className={
                                            student.status === "Active"
                                                ? "badge bg-success"
                                                : "badge bg-secondary"
                                        }
                                    >
                                        {student.status}
                                    </span>

                                </td>

                                <td>

                                    <button className="btn btn-sm btn-outline-primary me-2">
                                        <i className="bi bi-eye"></i>
                                    </button>

                                    <button className="btn btn-sm btn-outline-warning me-2">
                                        <i className="bi bi-pencil"></i>
                                    </button>

                                    <button className="btn btn-sm btn-outline-danger">
                                        <i className="bi bi-trash"></i>
                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );
}

export default RecentStudents;