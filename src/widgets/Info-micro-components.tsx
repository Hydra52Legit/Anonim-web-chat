import {Button} from "../shared/ui/Button.tsx"

export const InfoMicroComponents: React.FC = () => {
    return (
        <div className="flex gap-4 justify-center">
            <Button variant="primary">
                Узнать больше
            </Button>

            <Button variant="secondary">
                Подписаться на обновления
            </Button>
        </div>

    )
}