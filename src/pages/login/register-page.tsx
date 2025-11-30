import {useState} from 'react'
import {useAuth} from "../../app/hoocks/use-auth"
import {useNavigate, Link} from 'react-router-dom'
import { Card } from '../../shared/ui/Card'
import { Button } from '../../shared/ui/Button'
import { Input } from '../../shared/ui/Input'



export const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')

    const { register, isLoading } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        try {
            await register(email, password, name)
            navigate('/chat') // Перенаправляем в чат после регистрации
        } catch (err) {
            if (err instanceof Error) {
                throw new Error(`Ошибка входа: ${err.message}`)
            } else {
                throw new Error('Неизвестная ошибка входа')
            }
        }}

        return (
            <div
                className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
                <Card className="w-full max-w-md" hover glow>
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Создать аккаунт
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                            Присоединяйтесь к нашему сообществу
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <Input
                            type="text"
                            placeholder="Ваше имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            disabled={isLoading}
                        />

                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={isLoading}
                        />

                        <Input
                            type="password"
                            placeholder="Пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={isLoading}
                        />

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full"
                            loading={isLoading}
                        >
                            Зарегистрироваться
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
          <span className="text-gray-600 dark:text-gray-400">
            Уже есть аккаунт?{' '}
          </span>
                        <Link
                            to="/login"
                            className="text-primary-600 hover:text-primary-700 font-medium"
                        >
                            Войти
                        </Link>
                    </div>
                </Card>
            </div>
        )

}