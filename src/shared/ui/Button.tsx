// shared/ui/button/button.tsx
import type { ReactNode } from 'react'
import { cn } from '../lib/utils'
import {motion} from 'motion/react'
import type { HTMLMotionProps } from 'framer-motion'

interface ButtonProps extends HTMLMotionProps<'button'> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'glow'
    size?: 'sm' | 'md' | 'lg'
    children: ReactNode
    loading?: boolean

}

export const Button = ({
                           variant = 'primary',
                           size = 'md',
                           loading = false,
                           className,
                           children,
                           disabled,
                           ...props
                       }: ButtonProps) => {
    return (
        <motion.button
            whileHover={{ scale: 0.9 }}
            transition={{type:"spring", duration:400, damping:10}}
            className={cn(
                'inline-flex items-center justify-center rounded-lg font-medium',
                'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                {
                    // Primary variant
                    'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl dark:bg-primary-500 dark:hover:bg-primary-600':
                        variant === 'primary',

                    // Secondary variant
                    'bg-primary-100 text-primary-700 hover:bg-primary-200 dark:bg-primary-900 dark:text-primary-300 dark:hover:bg-primary-800':
                        variant === 'secondary',

                    // Ghost variant
                    'text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/50':
                        variant === 'ghost',

                    // Glow variant
                    'bg-primary-500 text-white shadow-lg animate-glow hover:animate-none dark:bg-primary-600':
                        variant === 'glow',
                },
                {
                    'h-8 px-3 text-sm': size === 'sm',
                    'h-10 px-4 text-base': size === 'md',
                    'h-12 px-6 text-lg': size === 'lg',
                },
                loading && 'relative overflow-hidden',
                className
            )}
            disabled={disabled || loading}
            {...props}
        >
            {loading && (
                <div className="absolute inset-0 bg-primary-500 animate-shimmer" />
            )}
            <span className={cn('transition-all', loading && 'opacity-0')}>
        {children}
        </span>
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </div>
            )}
        </motion.button>
    )
}