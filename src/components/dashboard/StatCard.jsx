import "../../styles/StatCard.css";

function StatCard({ icon, title, value, trend, variant = "primary" }) {
    return (
        <div className="stat-card">
            <div className={`stat-icon stat-icon-${variant}`}>
                <i className={`bi ${icon}`}></i>
            </div>

            <div className="stat-content">
                <p className="stat-title">{title}</p>
                <h3 className="stat-value">{value}</h3>
                {trend && <span className="stat-trend">{trend}</span>}
            </div>
        </div>
    );
}

export default StatCard;
