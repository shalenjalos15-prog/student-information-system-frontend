import { NavLink } from "react-router-dom";
import logo from "../../assets/school_logo.png";
import { useSidebar } from "../../context/SidebarContext";
import "../../styles/Sidebar.css";

const navItems = [
    { to: "/dashboard", icon: "bi-grid-1x2-fill", label: "Dashboard" },
    { to: "/students", icon: "bi-people-fill", label: "Students" },
    { to: "/courses", icon: "bi-journal-bookmark-fill", label: "Courses" },
];

function Sidebar() {
    const { collapsed, toggleCollapsed, mobileOpen, closeMobile } = useSidebar();

    const handleLogout = (e) => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (!confirmLogout) {
            e.preventDefault();
        }
    };

    return (
        <>
            <div
                className={`sidebar-backdrop ${mobileOpen ? "show" : ""}`}
                onClick={closeMobile}
                aria-hidden="true"
            />

            <aside className="sidebar" aria-label="Main navigation">
                <button
                    className="sidebar-collapse-btn"
                    onClick={toggleCollapsed}
                    aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                    title={collapsed ? "Expand" : "Collapse"}
                >
                    <i className={`bi ${collapsed ? "bi-chevron-right" : "bi-chevron-left"}`}></i>
                </button>

                <div className="sidebar-top">
                    <div className="sidebar-brand">
                        <img src={logo} alt="School logo" className="sidebar-logo" />
                        <div className="sidebar-brand-text">
                            <h1 className="sidebar-title">Student Information System</h1>
                            <span className="sidebar-subtitle">Academic Portal</span>
                        </div>
                    </div>

                    <div className="sidebar-divider" role="separator"></div>

                    <nav className="sidebar-menu">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className="sidebar-link"
                                onClick={closeMobile}
                                title={item.label}
                            >
                                <i className={`bi ${item.icon}`}></i>
                                <span>{item.label}</span>
                            </NavLink>
                        ))}
                    </nav>
                </div>

                <div className="sidebar-bottom">
                    <div className="sidebar-divider" role="separator"></div>
                    <NavLink
                        to="/"
                        className="sidebar-link logout-link"
                        onClick={handleLogout}
                        title="Logout"
                    >
                        <i className="bi bi-box-arrow-left"></i>
                        <span>Logout</span>
                    </NavLink>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
