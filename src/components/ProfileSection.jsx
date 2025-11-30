import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dp from '../assets/dp.png';

const ProfileSection = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate image loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="flex flex-col gap-6 items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Avatar */}
            <motion.div variants={itemVariants} className="relative w-24 h-24 rounded-full overflow-hidden">
                {isLoading && (
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                )}
                <img
                    src={dp}
                    alt="Terence Yebuah"
                    className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'
                        }`}
                    onLoad={() => setIsLoading(false)}
                />
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants} className="space-y-4 max-w-lg">
                <p className="text-xl leading-relaxed">
                    Terence Yebuah / this is nothing deep, just a <span className="font-bold">personal</span> website to share and archive stuff.
                </p>
                <p className="text-brand-blue dark:text-white text-sm">
                    Check these out :)
                </p>
            </motion.div>
        </motion.div>
    );
};

export default ProfileSection;
