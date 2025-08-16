import React from "react";

interface WavyBorderProps {
  color?: string;
  inverted?: boolean;
  className?: string;
  height?: number;
  waveCount?: number;
}

export default function WavyBorder({
  color = "white",
  inverted = false,
  className = "",
  height = 100,
  waveCount = 8,
}: WavyBorderProps) {
  // Generate a more complex wave pattern
  const generateWavePath = () => {
    const width = 100;
    const amplitude = 15;
    const frequency = waveCount;

    let path = `M 0 ${height / 2}`;

    for (let i = 0; i <= width; i += width / (frequency * 4)) {
      const x = i;
      const y =
        height / 2 +
        Math.sin((i / width) * Math.PI * 2 * frequency) * amplitude;
      path += ` L ${x} ${y}`;
    }

    path += ` L ${width} ${height} L 0 ${height} Z`;
    return path;
  };

  const wavyBorderSVG = `data:image/svg+xml;base64,${btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 ${height}">
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
          <stop offset="50%" style="stop-color:${color};stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:${color};stop-opacity:1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path d="${generateWavePath()}" fill="url(#waveGradient)" filter="url(#glow)"/>
    </svg>
  `)}`;

  return (
    <div className={`w-full ${className}`}>
      {!inverted && (
        <div
          className="w-full h-24 sm:h-32 transition-all duration-500 ease-out hover:scale-105"
          style={{
            backgroundImage: `url("${wavyBorderSVG}")`,
            backgroundRepeat: "repeat-x",
            backgroundSize: `${waveCount * 50}px ${height}px`,
            backgroundPosition: "center",
          }}
        />
      )}
      {inverted && (
        <div
          className="w-full h-24 sm:h-32 transition-all duration-500 ease-out hover:scale-105 rotate-180"
          style={{
            backgroundImage: `url("${wavyBorderSVG}")`,
            backgroundRepeat: "repeat-x",
            backgroundSize: `${waveCount * 50}px ${height}px`,
            backgroundPosition: "center",
          }}
        />
      )}
    </div>
  );
}
