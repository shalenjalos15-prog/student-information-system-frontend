import { NavLink } from "react-router-dom";
import logo from "../../assets/school_logo.png";
import "../../styles/Sidebar.css";

function Sidebar() {

    const handleLogout = (e) => {

        const confirmLogout = window.confirm(
            "Are you sure you want to logout?"
        );

        if (!confirmLogout) {
            e.preventDefault();
        }
    };

    return (
        <aside className="sidebar">

            <div>

                <div className="sidebar-header">
                    <img
                       src={logo}
                       alt="School Logo"
                       className="sidebar-logo"
                    />

                    <h5 className="sidebar-title">
                        Student Information System
                    </h5>
                </div>

                <nav className="sidebar-menu">

                    <NavLink to="/dashboard" className="sidebar-link">
                        <i className="bi bi-speedometer2"></i>
                        <span>Dashboard</span>
                    </NavLink>

                    <NavLink to="/students" className="sidebar-link">
                        <i className="bi bi-people-fill"></i>
                        <span>Students</span>
                    </NavLink>

                    <NavLink to="/courses" className="sidebar-link">
                        <i className="bi bi-journal-bookmark-fill"></i>
                        <span>Courses</span>
                    </NavLink>
                </nav>
            </div>

            <NavLink to="/" className="sidebar-link logout-link" onClick={handleLogout}
            >
                <i className="bi bi-box-arrow-left"></i>
                <span>Logout</span>
            </NavLink>
            
        </aside>
    );
}

export default Sidebar;