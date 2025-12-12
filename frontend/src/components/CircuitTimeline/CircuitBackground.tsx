export const CircuitBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Circuit traces */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00ffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Horizontal traces */}
        {[...Array(8)].map((_, i) => (
          <g key={`h-${i}`}>
            <line
              x1="0"
              y1={`${10 + i * 12}%`}
              x2="100%"
              y2={`${10 + i * 12}%`}
              stroke="url(#circuit-grad)"
              strokeWidth="1"
              className="animate-trace-horizontal"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          </g>
        ))}

        {/* Vertical traces */}
        {[...Array(6)].map((_, i) => (
          <line
            key={`v-${i}`}
            x1={`${10 + i * 18}%`}
            y1="0"
            x2={`${10 + i * 18}%`}
            y2="100%"
            stroke="rgba(0, 255, 255, 0.1)"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Floating nodes */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-pulse-slow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: ["#00ffff", "#ff00ff", "#ffff00"][i % 3],
            boxShadow: `0 0 10px ${["#00ffff", "#ff00ff", "#ffff00"][i % 3]}`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-cyan-500/30" />
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-cyan-500/30" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-cyan-500/30" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-cyan-500/30" />

      {/* Scan line effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-scan-line" />
    </div>
  );
};
