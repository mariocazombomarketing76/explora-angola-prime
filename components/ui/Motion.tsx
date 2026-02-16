'use client';

import { motion, MotionProps } from 'framer-motion';
import React from 'react';

type MotionComponentProps = MotionProps & {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

export const FadeIn = ({ children, className, delay = 0 }: MotionComponentProps) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        className={className}
    >
        {children}
    </motion.div>
);

export const SlideUp = ({ children, className, delay = 0 }: MotionComponentProps) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        className={className}
    >
        {children}
    </motion.div>
);

export const ScaleIn = ({ children, className, delay = 0 }: MotionComponentProps) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay, ease: 'easeOut' }}
        className={className}
    >
        {children}
    </motion.div>
);

export const StaggerContainer = ({ children, className, staggerDelay = 0.1 }: MotionComponentProps & { staggerDelay?: number }) => (
    <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
            hidden: {},
            show: {
                transition: {
                    staggerChildren: staggerDelay
                }
            }
        }}
        className={className}
    >
        {children}
    </motion.div>
);

export const StaggerItem = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
        className={className}
    >
        {children}
    </motion.div>
);
