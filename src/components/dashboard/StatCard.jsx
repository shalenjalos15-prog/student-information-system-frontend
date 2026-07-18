import "../../styles/StatCard.css";

function StatCard({ icon, title, value, color }) {
    return (
        <div className="stat-card">

            <div
                className="stat-icon"
                style={{ backgroundColor: color }}
            >
                <i className={`bi ${icon}`}></i>
            </div>

            <div className="stat-content">

                <p>{title}</p>

                <h3>{value}</h3>

            </div>

        </div>
    );
}

export default StatCard;