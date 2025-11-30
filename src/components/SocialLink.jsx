import React from 'react';
import { motion } from 'framer-motion';

const SocialLink = ({ icon: Icon, text, href }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {Icon && <Icon className="w-6 h-6 fill-current text-brand-blue dark:text-white" />}
            <span className="font-bold text-lg tracking-tight text-brand-blue dark:text-white">{text}</span>
        </motion.a>
    );
};

export default SocialLink;

