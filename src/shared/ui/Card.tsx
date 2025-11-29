import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

interface CardProps {
    children: ReactNode
    className?: string
    hover?: boolean
    glow?: boolean
}

export const Card = ({ children, className, hover = false, glow = false }: CardProps) => {
    return (
        <div
            className={cn(
                'rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all duration-300',
                'dark:border-primary-800 dark:bg-primary-900/20',
                hover && 'hover:shadow-lg hover:scale-105 hover:border-primary-300 dark:hover:border-primary-700',
                glow && 'animate-float border-primary-300 dark:border-primary-600',
                className
            )}
        >
            {children}
        </div>
    )
}