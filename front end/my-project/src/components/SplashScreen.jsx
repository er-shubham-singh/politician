import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-400 to-pink-500 bg-400 animate-gradient-x text-white backdrop-blur-md">
      <motion.img
        src="https://www.b2world.in/assets/logo-C1MCNYRb.png"
        alt="Logo"
        className="mb-6 h-36 w-36 rounded-full shadow-lg"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.8,
        }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9, rotate: -10 }}
      />

      <motion.div
        className="text-2xl md:text-3xl font-semibold text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Typewriter
          words={["Welcome to Today’s Update..."]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          delaySpeed={1200}
        />
      </motion.div>
    </div>
  );
};

export default SplashScreen;
