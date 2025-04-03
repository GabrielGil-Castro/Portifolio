import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AnimationExample = () => {
  const [animate, setAnimate] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setAnimate(!animate);
    setButtonClicked(true); // Esconde o botão após o clique
  };

  return (
    <div
      className={`h-screen flex justify-center items-center transition duration-200 ease-out ${animate ? "bg-black text-white" : ""}`}
    >
      <div>
        {!buttonClicked && (
          <motion.div
            className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-400 text-xl cursor-pointer select-none transition transform duration-500"
            onClick={handleClick}
            animate={{
              scale: animate ? 1.5 : 1,
              y: animate ? -16 : 0,
            }}
          >
            Clique aqui para saber mais
          </motion.div>
        )}
        
        <motion.div
          className="text-center mt-4 font-bold text-2xl transition ease-in"
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: animate ? 1 : 0,
            y: animate ? 0 : 8,
          }}
          transition={{ duration: animate ? 1 : 0.2 }}
        >
          {buttonClicked ? (
            <Link to="/home" className="text-blue-500 hover:text-blue-700">
              Ir para a Home
            </Link>
          ) : (
            "Hello World"
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AnimationExample;
