import React from 'react';
import Buttons from '../components/Buttons';
import DynamicText from '../components/DynamicText';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import { motion } from 'framer-motion';

const Home = () => {
    const variants = {
        initial: {
            opactiy: 0,
            transition: { duration: 0.5 },
            x: 300
        },
        visible: {
            opactiy: 1,
            x: 0
        },
        exit: {
            opactiy: 0,
            transition: { duration: 0.5 },
            x: -100
        }
    }

    return (
        <div>
            <Mouse />
            <Navigation />
            <SocialNetwork />

            <motion.div
                className="home"
                initial='initial'
                animate='visible'
                exit='exit'
                variants={variants}
            >
                <div className="home-main">
                    <div className="main-content">
                        <motion.h1 drag onDragEnd dragConstraints={{
                            left: -50,
                            right: 950,
                            top: -150,
                            bottom: 250
                        }}>NEL Agency</motion.h1>

                        <h2>
                            <DynamicText />
                        </h2>
                    </div>
                </div>
            </motion.div>
            <Buttons right={"/projet-1"} />
        </div>
    );
};

export default Home;