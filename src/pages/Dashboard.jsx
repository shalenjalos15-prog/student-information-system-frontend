import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import StatCard from "../components/dashboard/StatCard";
import RecentStudents from "../components/dashboard/RecentStudents";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">

      <Sidebar />

      <main className="dashboard-content">

        <Header 
            title="Dashboard"
            subtitle="Welcome back, Admin!"
        
        />

        <WelcomeBanner />

        <div className="stats-grid">

          <StatCard
            icon="bi-people-fill"
            title="Students"
            value="250"
            color="#1E3A8A"
          />

          <StatCard
            icon="bi-book-fill"
            title="Courses"
            value="8"
            color="#2563EB"
          />

          <StatCard
            icon="bi-journal-bookmark-fill"
            title="Subjects"
            value="35"
            color="#3B82F6"
          />

          <StatCard
            icon="bi-person-check-fill"
            title="Active Students"
            value="235"
            color="#16A34A"
          />
        </div>

        <RecentStudents />

      </main>
    </div>
  );
}

export default Dashboard;