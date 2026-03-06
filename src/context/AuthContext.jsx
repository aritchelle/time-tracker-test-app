import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    // Keep a mock user so the app components don't break when checking user.email
    const [user, setUser] = useState({ email: 'user@example.com' })

    function login(email, password) {
        // Stub
        setUser({ email })
        return true
    }

    function logout() {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}
