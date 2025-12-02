
import { Card } from '../../shared/ui/Card.tsx'
import { Button } from '../../shared/ui/Button'
import {ChatBubbleOvalLeftEllipsisIcon} from "@heroicons/react/20/solid";
import {HeaderChatPage} from "../../widgets/HeaderChatPage.tsx";
import {ChatWidget} from "../../widgets/ChatWidget.tsx";
import {useState} from "react";

export const ChatPage = () => {

    const [isChatOpen, setIsChatOpen] = useState(false)

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <HeaderChatPage/>
            <Card className="max-w-md mx-auto">
                <div className="text-center p-8">
                    <ChatBubbleOvalLeftEllipsisIcon className="text-blue-600 dark:text-blue-400 size-16 transition-transform hover:scale-110" />
                </div>
                <p className="text-gray-600 dark-text-gray-300">
                    Начните общение с другими пользователями
                </p>
                <Button
                    variant={'primary'}
                    size="sm"
                    loading={false}
                    className="mt-4"
                    onClick={() => setIsChatOpen(true)}
                >
                    Начать общение
                </Button>

            </Card>
            <ChatWidget
                isOpen={isChatOpen}
                onClose={() => setIsChatOpen(false)}
            />
        </div>
    )
}