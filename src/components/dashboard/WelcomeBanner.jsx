import "../../styles/WelcomeBanner.css";

function WelcomeBanner() {
    return (
        <div className="welcome-banner">

            <div className="welcome-left">

                <div className="welcome-icon">
                    <i className="bi bi-mortarboard-fill"></i>
                </div>

                <div>
                    <h2>Welcome back, Admin!</h2>

                    <p>
                        Manage students, courses efficiently in one place.
                    </p>
                </div>

            </div>

            <button className="add-student-btn">
                <i className="bi bi-plus-lg"></i>
                Add Student
            </button>

        </div>
    );
}

export default WelcomeBanner;