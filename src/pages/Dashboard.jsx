import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Dashboard() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        navigate('/sign-in')
    }

    return (
        <div className="page">
            <nav className="navbar">
                <div className="nav-brand">📋 TaskTrack</div>
                <div className="nav-right">
                    {/* This is the element the extension scrapes for the username */}
                    <div className="grid flex-1 text-left">
                        <span className="font-medium">{user?.email}</span>
                    </div>
                    <button className="btn-ghost" onClick={handleLogout}>Logout</button>
                </div>
            </nav>

            <div className="content">
                <h1>Welcome back!</h1>
                <p className="subtitle">Here's what's happening today.</p>

                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-num">8</div>
                        <div className="stat-label">Tasks Today</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-num">3</div>
                        <div className="stat-label">In Progress</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-num">5</div>
                        <div className="stat-label">Completed</div>
                    </div>
                </div>

                <div className="quick-actions">
                    <h2>Quick Actions</h2>
                    <button className="btn-primary" onClick={() => navigate('/tasks')}>
                        View All Tasks →
                    </button>
                </div>
            </div>
        </div>
    )
}
