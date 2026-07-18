import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import StatCard from "../components/dashboard/StatCard";
import RecentStudents from "../components/dashboard/RecentStudents";
import QuickActions from "../components/dashboard/QuickActions";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="dashboard-content">
        <Header
          title="Dashboard"
          subtitle="Manage your Student Information System efficiently."
        />

        <WelcomeBanner />

        <div className="stats-grid">
          <StatCard
            icon="bi-people-fill"
            title="Total Students"
            value="250"
            trend="+12 this term"
            variant="primary"
          />

          <StatCard
            icon="bi-journal-bookmark-fill"
            title="Total Courses"
            value="8"
            trend="Across 4 departments"
            variant="success"
          />
        </div>

        <div className="dashboard-grid">
          <RecentStudents />
          <QuickActions />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
