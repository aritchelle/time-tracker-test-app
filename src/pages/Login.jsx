import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        const success = login(email, password)
        if (success) {
            navigate('/dashboard')
        } else {
            setError('Invalid credentials. Try password: test123')
        }
    }

    return (
        <div className="page login-page">
            <div className="card login-card">
                <div className="logo">📋 TaskTrack</div>
                <h1>Sign in to your account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label>Email address</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="btn-primary">Sign In</button>
                </form>
                <p className="hint">💡 Use any email. Password is <strong>test123</strong></p>
            </div>
        </div>
    )
}
