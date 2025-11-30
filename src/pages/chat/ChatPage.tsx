
import { Card } from '../../shared/ui/Card.tsx'
// import { Button } from '../../shared/ui/Button'
import {ChatBubbleOvalLeftEllipsisIcon} from "@heroicons/react/20/solid";
import {HeaderChatPage} from "../../widgets/HeaderChatPage.tsx";
// import {useAuthActions} from "../../app/hooks/auth.ts";

export const ChatPage = () => {

    // const {user, handleLogout} = useAuthActions();
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
            <div className="max-w-4xl mx-auto">
                <HeaderChatPage/>
                <Card className="p-8 text-center">
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

                </Card>
            </div>
        </div>
    )
}