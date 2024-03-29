"use client"

import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimacionDos = ({ children }) => {

    const { ref: ref2, inView: inView2 } = useInView();
    const animation2 = useAnimation();

    useEffect(() => {
        if (inView2) {
            animation2.start({
                y: 0,
                opacity: 1,
                transition: { type: 'spring', duration: 2, delay: 0.50, ease: 'ease' }
            });
        }

    }, [inView2]);

    return (
        <div ref={ref2}>
            <AnimatePresence>
                <motion.div
                    initial={{y: 20, opacity: 0}} animate={animation2}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
};

export default AnimacionDos;