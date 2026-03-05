import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

const TASKS = [
    { id: 1, title: 'Review candidate applications', status: 'In Progress', priority: 'High', due: '2026-03-04' },
    { id: 2, title: 'Update project documentation', status: 'Todo', priority: 'Medium', due: '2026-03-05' },
    { id: 3, title: 'QA testing for sprint 3', status: 'In Progress', priority: 'High', due: '2026-03-04' },
    { id: 4, title: 'Weekly team sync preparation', status: 'Todo', priority: 'Low', due: '2026-03-06' },
    { id: 5, title: 'Data migration scripts review', status: 'Completed', priority: 'High', due: '2026-03-03' },
    { id: 6, title: 'Client feedback report', status: 'Todo', priority: 'Medium', due: '2026-03-07' },
]

export default function Tasks() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    return (
        <div className="page">
            <nav className="navbar">
                <div className="nav-brand" onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>📋 TaskTrack</div>
                <div className="nav-right">
                    <div className="grid flex-1 text-left">
                        <span className="font-medium">{user?.email}</span>
                    </div>
                    <button className="btn-ghost" onClick={() => { logout(); navigate('/sign-in') }}>Logout</button>
                </div>
            </nav>

            <div className="content">
                <h1>All Tasks</h1>
                <p className="subtitle">Click on a task to open it — this triggers a silent SPA navigation.</p>

                <div className="task-list">
                    {TASKS.map(task => (
                        <div
                            key={task.id}
                            className="task-row"
                            onClick={() => navigate(`/tasks/${task.id}`)}
                        >
                            <div className="task-info">
                                <div className="task-title">{task.title}</div>
                                <div className="task-meta">Due: {task.due}</div>
                            </div>
                            <div className="task-badges">
                                <span className={`badge priority-${task.priority.toLowerCase()}`}>{task.priority}</span>
                                <span className={`badge status-${task.status.replace(' ', '-').toLowerCase()}`}>{task.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export { TASKS }
