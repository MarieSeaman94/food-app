import Chocolate from "../components/Chocolate";
import Popular from "../components/Popular";
import Dinner from "../components/Dinner";
import { motion } from 'framer-motion';

import React from 'react'

function Home() {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
      <Popular />
      <Chocolate />
      <Dinner />
    </motion.div>
  );
}

export default Home;
