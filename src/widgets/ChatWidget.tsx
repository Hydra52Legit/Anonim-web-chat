import {useState, useEffect, useRef} from 'react'
import {Button} from "../../shared/ui/Button"
import {Card} from "../../shared/ui/Card
import {
    XMarkIcon,
    PaperAirplaneIcon,
    FlagIcon,
    UserGroupIcon,
    ShieldExclamationIcon,
    PaperClipIcon,
    FaceSmileIcon
} from "@heroicons/react/24/outline";
import {motion, AnimatePresence} from "framer-motion";

interface ChatWidgetProps {
    isOpen: boolean;
    onClose: () => void;

}

export const ChatWidget: React.FC<ChatWidgetProps> = ({isOpen, onClose}) => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const [message, setMessage] = useState([
        { id: 1, text: 'Привет! Как дела?', sender: 'other', time: '10:00' },
        { id: 2, text: 'Всё отлично! А у тебя?', sender: 'me', time: '10:01' },
    ])
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behavior: "smooth"});

    }
    useEffect(() => {
        scrollToBottom();
    }, [message]);


}