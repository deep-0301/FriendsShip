import React from 'react';
import Loding from '../Img/loding.gif';
import { motion } from 'framer-motion'

const Display = ({ result, show }) => {

    if (result === 'loading') {
        return (
            <div className={show}>
                <img src={Loding} alt='loding' height='111'></img>
            </div>
        )
    }

    return (
        <>
            <motion.div className={show}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1>
                    {result.percentage}<span>%</span>
                </h1>
                <h1>{result.result}
                </h1>
            </motion.div>
        </>
    );
}

export default Display;