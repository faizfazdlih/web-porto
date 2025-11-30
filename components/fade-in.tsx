'use client'

import { motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface FadeInProps {
    children: ReactNode
    delay?: number
    duration?: number
    className?: string
}

export function FadeIn({ children, delay = 0, duration = 0.5, className }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

interface FadeInScrollProps {
    children: ReactNode
    delay?: number
    duration?: number
    className?: string
    threshold?: number
}

export function FadeInScroll({ children, delay = 0, duration = 0.5, className, threshold = 0.1 }: FadeInScrollProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: threshold })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
            animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : { opacity: 0, filter: 'blur(10px)', y: 30 }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

interface FadeInStaggerProps {
    children: ReactNode
    className?: string
    staggerDelay?: number
}

export function FadeInStagger({ children, className, staggerDelay = 0.1 }: FadeInStaggerProps) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                visible: {
                    transition: {
                        staggerChildren: staggerDelay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function FadeInStaggerScroll({ children, className, staggerDelay = 0.1, threshold = 0.1 }: FadeInStaggerProps & { threshold?: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: threshold })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: staggerDelay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function FadeInStaggerItem({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
                visible: { 
                    opacity: 1, 
                    filter: 'blur(0px)', 
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.25, 0.4, 0.25, 1]
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}