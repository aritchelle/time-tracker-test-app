import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { TASKS } from './Tasks.jsx'

export default function TaskDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { user, logout } = useAuth()
    const task = TASKS.find(t => t.id === Number(id))

    const [notes, setNotes] = useState('')
    const [status, setStatus] = useState(task?.status || 'Todo')

    if (!task) {
        return <div className="page"><div className="content"><h1>Task not found.</h1></div></div>
    }

    return (
        <div className="page">
            <nav className="navbar">
                <div className="nav-brand" onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>📋 TaskTrack</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Link to="/tasks" className="btn-ghost" style={{ padding: '0.4rem 0.8rem' }}>← Back</Link>
                        <h1>Task Details</h1>
                    </div>
                </div>
            </nav>

            <div className="content">
                <button className="btn-back" onClick={() => navigate('/tasks')}>← Back to Tasks</button>

                <div className="task-detail-card">
                    <div className="task-detail-header">
                        <h1>{task.title}</h1>
                        <div className="task-badges">
                            <span className={`badge priority-${task.priority.toLowerCase()}`}>{task.priority}</span>
                        </div>
                    </div>

                    <div className="detail-grid">
                        <div className="detail-item">
                            <label>Due Date</label>
                            <span>{task.due}</span>
                        </div>
                        <div className="detail-item">
                            <label>Status</label>
                            <select
                                value={status}
                                onChange={e => setStatus(e.target.value)}
                                className="status-select"
                            >
                                <option>Todo</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                            </select>
                        </div>
                    </div>

                    <div className="field">
                        <label>Work Notes</label>
                        <textarea
                            className="notes-area"
                            placeholder="Type your notes about this task here... The extension should be tracking your time on this exact URL."
                            value={notes}
                            onChange={e => setNotes(e.target.value)}
                            rows={6}
                        />
                    </div>

                    <div className="detail-actions">
                        <button className="btn-primary" onClick={() => alert('Saved! Check the extension export to see tracked time for this task.')}>
                            Save Changes
                        </button>
                        <button className="btn-secondary" onClick={() => navigate('/tasks')}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
