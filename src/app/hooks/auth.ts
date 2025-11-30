import {useAuth} from "./use-auth.ts"
import {useNavigate} from "react-router-dom"

const useAuthHandler = () => {
    const {user,logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
        navigate("/login")
    }
    return {
        user,
        handleLogout,
    }
}
export const useAuthActions = () => {
    return useAuthHandler()
}