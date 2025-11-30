// providers/auth-provider.tsx
import { createContext, useState, useEffect } from 'react'
import type {ReactNode} from 'react'

interface User {
    id: string
    email: string
    name: string
}

interface AuthContextType {
    user: User | null
    isLoading: boolean
    login: (email: string, password: string) => Promise<void>
    register: (email: string, password: string, name: string) => Promise<void>
    logout: () => void
}
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    // Проверяем авторизацию при загрузке
    useEffect(() => {
        checkAuth()
    }, [])

    const checkAuth = async () => {
        try {
            const token = localStorage.getItem('token')
            if (token) {
                // Здесь запрос к API для проверки токена
                // const userData = await api.getProfile()
                // setUser(userData)
            }
        } catch {
            localStorage.removeItem('token')
        } finally {
            setIsLoading(false)
        }
    }

    const login = async (email: string, password: string) => {
        setIsLoading(true)
        try {
            // Имитация API запроса
            // const { user, token } = await api.login({ email, password })
            const mockUser = { id: '1', email, password, name: 'Пользователь' }
            const mockToken = 'fake-jwt-token'

            setUser(mockUser)
            localStorage.setItem('token', mockToken)
        } catch {
            throw new Error('Ошибка входа:')
        } finally {
            setIsLoading(false)
        }
    }

    const register = async (email: string, password: string, name: string) => {
        setIsLoading(true)
        try {
            // Имитация API запроса
            // const { user, token } = await api.register({ email, password, name })
            const mockUser = { id: '1', email, password, name }
            const mockToken = 'fake-jwt-token'

            setUser(mockUser)
            localStorage.setItem('token', mockToken)
        } catch {
            throw new Error('Ошибка регистрации')
        } finally {
            setIsLoading(false)
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('token')
    }

    return (
        <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;