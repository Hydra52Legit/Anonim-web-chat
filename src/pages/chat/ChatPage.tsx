
import { useAuth } from '../../app/hooks/use-auth.ts'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../shared/ui/Card.tsx'
import { Button } from '../../shared/ui/Button'
import {ChatBubbleOvalLeftEllipsisIcon} from "@heroicons/react/20/solid";

export const ChatPage = () => {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
            <div className="max-w-4xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Чат приложение
                    </h1>
                    <div className="flex items-center gap-4">
            <span className="text-gray-700 dark:text-gray-300">
                Привет, {user?.name}!
            </span>
                        <Button variant="ghost" onClick={handleLogout}>
                            Выйти
                        </Button>
                    </div>
                </header>

                <Card className="p-8 text-center" hover>
                    <div className="flex items-center justify-center">
                        <ChatBubbleOvalLeftEllipsisIcon className="size-12 text-white"/>
                    </div>


                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Чат скоро будет доступен!
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Мы работаем над созданием удивительного чата.
                        Скоро вы сможете общаться с друзьями и коллегами.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button variant="primary">
                            Узнать больше
                        </Button>
                        <Button variant="secondary">
                            Подписаться на обновления
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}