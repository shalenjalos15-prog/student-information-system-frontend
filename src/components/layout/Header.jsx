import { useSidebar } from "../../context/SidebarContext";
import "../../styles/Header.css";

function Header({ title, subtitle }) {
    const { toggleMobile } = useSidebar();

    return (
        <header className="dashboard-header">
            <div className="header-left">
                <button
                    className="menu-toggle"
                    onClick={toggleMobile}
                    aria-label="Toggle navigation menu"
                >
                    <i className="bi bi-list"></i>
                </button>

                <div>
                    <h2 className="page-title">{title}</h2>
                    {subtitle && <p className="page-subtitle">{subtitle}</p>}
                </div>
            </div>

            <div className="header-search">
                <i className="bi bi-search"></i>
                <input type="text" placeholder="Search..." aria-label="Search" />
            </div>

            <div className="header-right">
                <button className="notification-btn" aria-label="Notifications">
                    <i className="bi bi-bell"></i>
                    <span className="notification-dot" aria-hidden="true"></span>
                </button>

                <div className="admin-profile">
                    <div className="admin-avatar">A</div>
                    <div className="admin-meta">
                        <h6>Administrator</h6>
                        <small>System Admin</small>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
