import "../../styles/StudentToolbar.css";

function StudentToolbar({ onAddStudent }) {
    return (
        <div className="student-toolbar">

            <div className="search-box">

                <i className="bi bi-search"></i>

                <input
                    type="text"
                    placeholder="Search student..."
                />

            </div>

            <button
                className="btn add-btn"
                onClick={onAddStudent}
            >
                <i className="bi bi-plus-lg"></i>
                Add Student
            </button>

        </div>
    );
}

export default StudentToolbar;