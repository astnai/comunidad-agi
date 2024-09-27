import React, { useState, useRef, useEffect } from "react";
import { PlayIcon, PauseIcon } from "@radix-ui/react-icons";

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    const context = new (window.AudioContext || window.AudioContext)();
    const analyser = context.createAnalyser();
    const audioSource = context.createMediaElementSource(audioRef.current);

    audioSource.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const canvas = canvasRef.current;
    const canvasCtx = canvas?.getContext("2d");

    const draw = () => {
      if (!canvasCtx || !canvas) return;

      const WIDTH = canvas.width;
      const HEIGHT = canvas.height;

      requestAnimationFrame(draw);

      analyser.getByteTimeDomainData(dataArray);

      canvasCtx.fillStyle = "#1A1A1A";
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "#FFFFFF";

      canvasCtx.beginPath();

      const sliceWidth = (WIDTH * 1.0) / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * HEIGHT) / 2;

        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height / 2);
      canvasCtx.stroke();
    };

    draw();
    setAudioContext(context);
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const handleEnded = () => {
        setIsPlaying(false);
        audioElement.currentTime = 0;
      };
      audioElement.addEventListener("ended", handleEnded);

      return () => {
        audioElement.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current && audioContext) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        audioContext.resume();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-[#1A1A1A] text-white p-1.5 rounded-xl flex items-center space-x-4 max-w-md mx-auto hidden sm:flex">
      <audio ref={audioRef} src={src} />

      <button
        onClick={togglePlayPause}
        className="focus:outline-none hover:bg-[#1A1A1A] rounded-md transition-transform duration-300 ease-in-out transform hover:scale-110"
      >
        <div className="relative w-6 h-6">
          <PauseIcon className={`w-6 h-6 absolute transition-all duration-300 ease-in-out ${isPlaying ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
          <PlayIcon className={`w-6 h-6 absolute transition-all duration-300 ease-in-out ${isPlaying ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`} />
        </div>
      </button>

      <canvas
        ref={canvasRef}
        width="250"
        height="20"
        className="bg-[#1A1A1A] w-full"
      />
    </div>
  );
};

export default AudioPlayer;
