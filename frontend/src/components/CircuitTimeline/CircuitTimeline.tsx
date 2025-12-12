import { CircuitNode } from "./CircuitNode.tsx";
import { CircuitBackground } from "./CircuitBackground.tsx";

const events = [
  {
    id: 1,
    title: "ROBO_WARS",
    date: "2025.03.15",
    time: "10:00 HRS",
    venue: "MAIN_ARENA",
    description: "Battle of autonomous robots fighting for supremacy",
    color: "#ff0055",
  },
  {
    id: 2,
    title: "SCI_EXPO",
    date: "2025.03.15",
    time: "11:30 HRS",
    venue: "EXHIBITION_HALL",
    description: "Showcase of innovative scientific projects",
    color: "#00ff88",
  },
  {
    id: 3,
    title: "IOT_WORKSHOP",
    date: "2025.03.15",
    time: "14:00 HRS",
    venue: "LAB_101",
    description: "Hands-on experience with Internet of Things",
    color: "#00ccff",
  },
  {
    id: 4,
    title: "HACKATHON",
    date: "2025.03.16",
    time: "09:00 HRS",
    venue: "TECH_HUB",
    description: "24-hour coding marathon for innovative solutions",
    color: "#ffaa00",
  },
  {
    id: 5,
    title: "AI_SUMMIT",
    date: "2025.03.16",
    time: "13:00 HRS",
    venue: "CONF_HALL",
    description: "Exploring the future of artificial intelligence",
    color: "#aa00ff",
  },
  {
    id: 6,
    title: "DRONE_RACE",
    date: "2025.03.16",
    time: "16:00 HRS",
    venue: "OPEN_GROUND",
    description: "High-speed drone racing competition",
    color: "#ff6600",
  },
  {
    id: 7,
    title: "CYBER_SEC",
    date: "2025.03.17",
    time: "10:00 HRS",
    venue: "SEMINAR_HALL",
    description: "Workshop on ethical hacking and security",
    color: "#00ffcc",
  },
  {
    id: 8,
    title: "VR_EXPERIENCE",
    date: "2025.03.17",
    time: "12:00 HRS",
    venue: "VR_LAB",
    description: "Immersive virtual reality demonstrations",
    color: "#ff00aa",
  },
  {
    id: 9,
    title: "TECH_QUIZ",
    date: "2025.03.17",
    time: "15:00 HRS",
    venue: "AUDITORIUM",
    description: "Test your technical knowledge and win prizes",
    color: "#00aaff",
  },
  {
    id: 10,
    title: "CLOSING_CEREMONY",
    date: "2025.03.17",
    time: "18:00 HRS",
    venue: "MAIN_STAGE",
    description: "Awards and celebration of innovation",
    color: "#ffff00",
  },
];

export const CircuitTimeline = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden py-20">
      <CircuitBackground />

      {/* Title */}
      <div className="relative z-20 text-center mb-16">
        <div className="inline-block">
          <h1 className="text-5xl md:text-6xl font-mono font-bold tracking-wider mb-2 animate-glitch">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              CHRONOLINE
            </span>
          </h1>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          <p className="text-cyan-500/60 text-sm font-mono tracking-[0.3em] mt-3">
            {"// SYSTEM.EVENTS.LOAD()"}
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto px-8">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
          <div className="w-full h-full bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-pink-500/50" />
          <div className="absolute inset-0 w-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 animate-pulse-slow opacity-50" />
        </div>

        {/* Events */}
        <div className="relative space-y-16">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CircuitNode event={event} index={index} isLeft={index % 2 === 0} />
            </div>
          ))}
        </div>

        {/* End node */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-black" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-20 text-center mt-20">
        <p className="text-cyan-500/40 font-mono text-xs tracking-widest">
          [ HOVER TO ACTIVATE NODES ]
        </p>
      </div>
    </div>
  );
};
