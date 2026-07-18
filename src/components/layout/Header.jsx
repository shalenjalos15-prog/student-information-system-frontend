import "../../styles/Header.css";

function Header({ title, subtitle }) {
    return (
        <header className="dashboard-header">

            <div>
                <h2 className="page-title">{title}</h2>
                <p className="page-subtitle">
                    {subtitle}
                </p>
            </div>

            <div className="header-right">

                <button className="notification-btn">
                    <i className="bi bi-bell-fill"></i>
                </button>

                <div className="admin-profile">
                    <div className="admin-avatar">
                        A
                    </div>

                    <div>
                        <h6>Administrator</h6>
                        <small>System Admin</small>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;