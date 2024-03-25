"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

const quotes = [
  "The only constant in life is change. - Heraclitus",
  "The only true wisdom is in knowing you know nothing. - Socrates",
  "The unexamined life is not worth living. - Socrates",
  "To live is to suffer, to survive is to find some meaning in the suffering. - Friedrich Nietzsche",
  "That which does not kill us makes us stronger. - Friedrich Nietzsche",
  "He who has a why to live can bear almost any how. - Friedrich Nietzsche",
  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
  "Life is what happens when you're busy making other plans. - Allen Saunders",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. - Steve Jobs",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "The best revenge is massive success. - Frank Sinatra",
  "The two most important days in your life are the day you are born and the day you find out why. - Mark Twain",
  "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "What you lack in talent can be made up with desire, hustle and giving 110% all the time. - Don Zimmer",
  "Do what you can with all you have, wherever you are. - Theodore Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. - Joel Brown",
  "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
];

const Loading = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuoteIndex(randomIndex);
    }, 5000); 

    return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
  }, []);
  return (
    <div className="loading-container flex justify-center h-screen w-screen flex-col items-center bg-secondary">
      <div className="spinner">
        {/* backup gif: https://i.pinimg.com/originals/92/a4/ac/92a4acc3099fdccb91e6c3447c2ed12f.gif*/}
        <Image
          src="https://cdn.discordapp.com/attachments/890194603272179763/1221509905475698759/loading-unscreen.gif?ex=6612d6c0&is=660061c0&hm=336c8fbce03641841e75a58d7d74f3c7c0effa7fda27b6398b73a0713102dc14&"
          alt="Loading"
          width={150}
          height={150}
        />
      </div>
      <div className="quotes bg-secondary p-4 text-center">
        <p>{quotes[currentQuoteIndex]}</p>
      </div>
    </div>
  );
};

export default Loading;