import Chocolate from "../components/Chocolate";
import Popular from "../components/Popular";
import { motion } from 'framer-motion';

import React from 'react'

function Home() {
  return (
    <motion.div>
      <Popular />
      <Chocolate />
    </motion.div>
  );
}

export default Home;
