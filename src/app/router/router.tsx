import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../../app/hoocks/use-auth.ts'
import { LoginPage } from '../../pages/login/login-page.tsx'
import { RegisterPage } from '../../pages/login/register-page.tsx'
import { ChatPage } from '../../pages/chat/chat-page.tsx'
import type {ReactNode} from "react";

const ProtectedRoute = ({ children }: {children: ReactNode}) => {
    const {user, isLoading} = useAuth()
    if (isLoading) {
        return <div>Загрузка...</div>
    }
    return user ? <>{children}</> : <Navigate to='/login'/>

}

export const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route
            path="/chat"
            element={<ProtectedRoute>
                <ChatPage/>
                </ProtectedRoute>}>

            </Route>
            <Route path="/" element={<Navigate to="/chat" />} />
            <Route path="*" element={<Navigate to="/chat" />} />
        </Routes>
    )
}