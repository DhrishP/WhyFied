"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "tailwindcss/tailwind.css";

// Import local audio files

const recordings = [
  { id: 1, url: "/audio/forest.mp3" },
  { id: 2, url: "/audio/perfe.mp3" },
  // Add more recordings here...
];
function PonderPage() {
  const [playing, setPlaying] = useState(false);
  const [activeRecording, setActiveRecording] = useState(recordings[0]);
  const [middleLogged, setMiddleLogged] = useState(false);

  useEffect(() => {
    if (playing) {
      console.log("Playing recording " + activeRecording.id);
    } else {
      console.log("Paused recording " + activeRecording.id);
    }
  }, [playing, activeRecording]);

  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      if (playing) {
        event.preventDefault();
        event.returnValue =
          "You are currently in a pondering session. Are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [playing]);

  const handleEnded = () => {
    console.log("End of the session");
    const nextIndex =
      (recordings.indexOf(activeRecording) + 1) % recordings.length;
    setActiveRecording(recordings[nextIndex]);
    setMiddleLogged(false);
  };

  const handleProgress = (state: any) => {
    if (!middleLogged && state.playedSeconds > state.loadedSeconds / 2) {
      console.log("Middle of the session");
      setMiddleLogged(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl mb-8">Ponder Page</h1>
      <div className="flex space-x-4">
        {recordings.map((recording) => (
          <button
            key={recording.id}
            className={`px-4 py-2 rounded-lg ${
              activeRecording.id === recording.id
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
            onClick={() => setActiveRecording(recording)}
          >
            Recording {recording.id}
          </button>
        ))}
      </div>
      <ReactPlayer
        url={activeRecording.url}
        playing={playing}
        controls={true}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={handleEnded}
        onProgress={handleProgress}
        className="mt-8"
      />
    </div>
  );
}

export default PonderPage;
