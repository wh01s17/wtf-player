import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

export const Animation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % 5);
        }, 2000); // cambia cada 2 segundos para ver bien las animaciones
        return () => clearInterval(interval);
    }, []);

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.5, rotate: -90 },
        visible: { opacity: 1, scale: 1, rotate: 0 },
        exit: { opacity: 0, scale: 0.5, rotate: 90 }
    };

    const renderIcon = (index: number) => {
        switch (index) {
            case 0: // ▶ Play
                return <polygon points="40,30 70,50 40,70" fill="#fff" />;
            case 1: // ❚❚ Pause
                return (
                    <>
                        <rect x="35" y="30" width="8" height="40" fill="#fff" />
                        <rect x="57" y="30" width="8" height="40" fill="#fff" />
                    </>
                );
            case 2: // ■ Stop
                return <rect x="35" y="35" width="30" height="30" fill="#fff" />;
            case 3: // » Forward
                return (
                    <>
                        <polygon points="30,30 50,50 30,70" fill="#fff" />
                        <polygon points="50,30 70,50 50,70" fill="#fff" />
                    </>
                );
            case 4: // « Rewind
                return (
                    <>
                        <polygon points="70,30 50,50 70,70" fill="#fff" />
                        <polygon points="50,30 30,50 50,70" fill="#fff" />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className='h-140 pl-40 pt-20'>
            <svg width="100" height="100" viewBox="0 0 100 100">
                <AnimatePresence mode="wait">
                    <motion.g
                        key={currentIndex}
                        variants={iconVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                    >
                        {renderIcon(currentIndex)}
                    </motion.g>
                </AnimatePresence>
            </svg>
        </div>
    )
}
