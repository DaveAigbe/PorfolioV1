import React, {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const TransitionLayout = ({children}) => {
    // Fade in
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const squareVariants = {
        visible: {opacity: 1, scale: 1, transition: {duration: .75}},
        hidden: {opacity: 0, scale: 0.5}
    };

    // When it comes into view show element
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);


    return (
        <motion.div ref={ref} animate={controls} initial="hidden" variants={squareVariants}>
            {children}
        </motion.div>
    );
};

export default TransitionLayout;
