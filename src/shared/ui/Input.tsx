// shared/ui/input/input.tsx

import { cn } from '../lib/utils'
import type {HTMLMotionProps} from "framer-motion";
import {motion} from "motion/react"

interface InputProps extends HTMLMotionProps<'input'> {
    variant?: 'default' | 'glow'
}

export const Input = ({ variant = 'default', className, ...props }: InputProps) => {
    return (
        <motion.input
            initial={{opacity:0, y:10}}
            animate={{opacity:1, y:0}}
            whileFocus={variant !== 'glow' ? { scale: 1.01, boxShadow:"0 0 0 2px rgba(99, 102, 241, 0.5)"}:undefined}
            className={cn(
                'flex h-10 w-full rounded-lg border border-primary-300 bg-white px-3 py-2 text-sm transition-all duration-300',
                'placeholder:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                'dark:border-primary-700 dark:bg-primary-900/30 dark:text-white dark:placeholder:text-primary-500',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                variant === 'glow' && 'focus:animate-glow focus:ring-primary-400',
                className
            )}
            {...props}
        />
    )
}