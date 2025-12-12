import { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

interface CircuitNodeProps {
  event: {
    id: number;
    title: string;
    date: string;
    time: string;
    venue: string;
    description: string;
    color: string;
  };
  index: number;
  isLeft: boolean;
}

export const CircuitNode = ({ event, index, isLeft }: CircuitNodeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex items-center gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Connection line to center */}
      <div
        className={`absolute top-1/2 h-0.5 transition-all duration-500 ${isLeft ? "right-1/2" : "left-1/2"}`}
        style={{
          width: isHovered ? 180 : 120,
          background: `linear-gradient(${isLeft ? "to left" : "to right"}, ${event.color}, transparent)`,
          boxShadow: isHovered ? `0 0 20px ${event.color}` : "none",
        }}
      >
        {/* Electric pulse */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full animate-circuit-pulse"
          style={{
            background: event.color,
            boxShadow: `0 0 10px ${event.color}, 0 0 20px ${event.color}`,
            animationDelay: `${index * 0.2}s`,
          }}
        />
      </div>

      {/* Event Card */}
      <div
        className={`relative w-80 p-5 rounded-lg border transition-all duration-300 cursor-pointer
          ${isHovered ? "scale-105" : "scale-100"}`}
        style={{
          background: `linear-gradient(135deg, ${event.color}15, transparent, ${event.color}08)`,
          borderColor: isHovered ? event.color : `${event.color}44`,
          boxShadow: isHovered
            ? `0 0 30px ${event.color}44, inset 0 0 30px ${event.color}11`
            : `0 0 10px ${event.color}22`,
        }}
      >
        {/* Glitch effect overlay */}
        {isHovered && (
          <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
            <div className="absolute inset-0 animate-glitch-1 opacity-30" 
              style={{ background: `linear-gradient(90deg, transparent, ${event.color}33, transparent)` }} 
            />
          </div>
        )}

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: event.color }} />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: event.color }} />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 rounded-bl-lg" style={{ borderColor: event.color }} />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: event.color }} />

        {/* Event number */}
        <div
          className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-sm"
          style={{
            background: event.color,
            boxShadow: `0 0 15px ${event.color}`,
            color: "#000",
          }}
        >
          {String(event.id).padStart(2, "0")}
        </div>

        <h3 
          className="font-bold text-xl mb-2 font-mono tracking-wide"
          style={{ color: event.color }}
        >
          {event.title}
        </h3>
        
        <p className="text-white/60 text-sm mb-4 leading-relaxed">{event.description}</p>

        <div className="space-y-2 font-mono text-xs">
          <div className="flex items-center gap-2" style={{ color: `${event.color}cc` }}>
            <Calendar className="w-3.5 h-3.5" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2" style={{ color: `${event.color}cc` }}>
            <Clock className="w-3.5 h-3.5" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2" style={{ color: `${event.color}cc` }}>
            <MapPin className="w-3.5 h-3.5" />
            <span>{event.venue}</span>
          </div>
        </div>
      </div>

      {/* Center node */}
      <div
        className={`relative z-10 w-6 h-6 rounded-full transition-all duration-300
          ${isHovered ? "scale-150" : "scale-100"}`}
        style={{
          background: event.color,
          boxShadow: isHovered
            ? `0 0 20px ${event.color}, 0 0 40px ${event.color}, 0 0 60px ${event.color}`
            : `0 0 10px ${event.color}`,
        }}
      >
        <div className="absolute inset-1 rounded-full bg-black/50" />
      </div>
    </div>
  );
};