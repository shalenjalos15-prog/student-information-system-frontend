import { useNavigate } from "react-router-dom";
import "../../styles/WelcomeBanner.css";

function WelcomeBanner() {
    const navigate = useNavigate();

    return (
        <div className="welcome-banner">
            <div className="welcome-left">
                <div className="welcome-icon">
                    <i className="bi bi-mortarboard-fill"></i>
                </div>

                <div className="welcome-text">
                    <h2>Welcome back, Administrator</h2>
                    <p>Manage your Student Information System efficiently.</p>
                </div>
            </div>

            <button className="welcome-action" onClick={() => navigate("/students")}>
                <i className="bi bi-plus-lg"></i>
                Add Student
            </button>
        </div>
    );
}

export default WelcomeBanner;
