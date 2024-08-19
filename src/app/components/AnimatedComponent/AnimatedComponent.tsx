'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AnimatedElement = ({ children, className = '', direction = 'left' }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const variants = {
        hidden: { 
            opacity: 0, 
            x: direction === 'left' ? -100 : 100 
        },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
                type: "spring",
                stiffness: 50,
                damping: 10,
                duration: 2.3,
                delay: 0
            }
        }
    }

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedElement