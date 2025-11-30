import type { ReactNode } from 'react'
import { cn } from '../lib/utils'
import {motion} from 'motion/react'

interface CardProps {
    children: ReactNode
    className?: string

}

export const Card = ({ children, className }: CardProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.01, boxShadow:"0 0 10px 2px rgba(30, 144, 255, 0.7)" }}
            className={cn(
                'rounded-xl border border-primary-200 bg-white p-6 shadow-sm transition-all duration-300',
                'dark:border-primary-800 dark:bg-primary-900/20',
                className
            )}
        >
            {children}
        </motion.div>
    )
}