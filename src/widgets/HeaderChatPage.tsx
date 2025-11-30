import {useAuthActions} from "../app/hooks/auth.ts";
import {Button} from "../shared/ui/Button.tsx";


export const HeaderChatPage = () => {
    const {user, handleLogout}= useAuthActions();
    const greeting = user?.name ? `Привет, ${user?.name}!` : 'Привет, дорогой пользователь!'
    return (
        <div>
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Чат приложение
                </h1>
                <div className="flex items-center gap-4">
            <span className="text-gray-700 dark:text-gray-300">
                {greeting}
            </span>
                    <Button variant="ghost" onClick={handleLogout}>
                        Выйти
                    </Button>
                </div>
            </header>
        </div>
    )
}