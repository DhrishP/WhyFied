"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const QuestionComponent = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.div
        initial={{ y: "0vh" }}
        animate={{ y: isClicked ? "16.67vh" : "0vh" }}
        transition={{ duration: 0.5 }}
        className="text-2xl h-3/4"
      >
        Your question here
      </motion.div>
      <motion.input
        onClick={handleClick}
        animate={{ height: isClicked ? "70vh" : "10vh" }}
        transition={{ duration: 0.5 }}
        className="w-3/4 mt-4 p-2 border-2 border-gray-300 rounded-md"
        placeholder="Answer the question"
      />
      {isClicked && (
        <motion.button
          animate={{ height: "10vh" }}
          transition={{ duration: 0.5 }}
          className="w-3/4 mt-4 p-2 bg-lime-200 text-white rounded-lg"
        >
          Submit
        </motion.button>
      )}
    </div>
  );
};

export default QuestionComponent;
