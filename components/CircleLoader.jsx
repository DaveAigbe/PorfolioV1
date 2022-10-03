import React from 'react';
import { motion } from "framer-motion";


const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1
};

const circleStyle = {
    display: "block",
    width: "8rem",
    height: "8rem",
    border: "0.5rem solid #e9e9e9",
    borderTop: "0.5rem solid #3498db",
    borderRadius: "50%",
    position: "absolute",
    boxSizing: "border-box",
    top: 0,
    left: 0
};


const CircleLoader = () => {
    return (
            <div style={{position: 'relative'}}>
                <motion.span
                    style={circleStyle}
                    animate={{ rotate: 360 }}
                    transition={spinTransition}
                />
            </div>
    )
};

export default CircleLoader;
