import React, { useState } from "react";
import { Code, FileText, Brain, Puzzle, Search, Terminal, Layout, Users, Trophy, Star, Sparkles, Rocket, Target, Keyboard, Cpu, GitBranch, Cloud, Database, Shield, MapPin, Award, Presentation, Gamepad2 } from "lucide-react";

const EventPage = () => {
  const [eventType, setEventType] = useState<"technical" | "nonTechnical" | "flagship" | "goldenByte">("flagship");
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  const flagshipEvents = [
    { 
      id: "paper", 
      icon: <FileText className="w-6 h-6" />, 
      name: "Paper Presentation", 
      desc: "Present your research papers and innovative ideas", 
      fullDesc: "Present your innovative research papers and technical ideas to a panel of expert judges. Showcase your research methodology, findings, and potential impact on the tech industry.",
      prize: "₹50,000",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop"
    },
    { 
      id: "hackathon", 
      icon: <Code className="w-6 h-6" />, 
      name: "Hackathon", 
      desc: "24-hour coding marathon to build innovative solutions", 
      fullDesc: "Join our flagship 24-hour coding marathon where teams compete to build innovative solutions to real-world problems. Collaborate, code, and create something amazing!",
      prize: "₹1,00,000",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop"
    },
    { 
      id: "seminar", 
      icon: <Presentation className="w-6 h-6" />, 
      name: "Tech Seminar", 
      desc: "Expert talks on cutting-edge technologies", 
      fullDesc: "Attend inspiring talks from industry leaders and tech experts. Learn about the latest trends in AI, blockchain, cloud computing, and emerging technologies.",
      prize: "Certificates",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
    },
  ];

  const goldenByteEvents = [
    { 
      id: "rapid", 
      icon: <Code className="w-6 h-6" />, 
      name: "Rapid Coding", 
      desc: "Fast-paced coding competition against the clock", 
      fullDesc: "Race against time in this intense fast-paced coding challenge. Solve problems quickly and efficiently under pressure to claim victory.",
      prize: "₹30,000",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
    },
    { 
      id: "relay", 
      icon: <Users className="w-6 h-6" />, 
      name: "Relay Coding", 
      desc: "Team coding relay race challenge", 
      fullDesc: "Work as a team in this unique relay coding challenge. Each member contributes their part to build a complete solution collaboratively.",
      prize: "₹25,000",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
    },
    { 
      id: "workshop", 
      icon: <Terminal className="w-6 h-6" />, 
      name: "Workshop Series", 
      desc: "Intensive hands-on learning sessions", 
      fullDesc: "Participate in intensive hands-on workshops covering latest technologies. Learn from experts and gain practical skills you can apply immediately.",
      prize: "Certificates",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
    },
    { 
      id: "techquiz", 
      icon: <Brain className="w-6 h-6" />, 
      name: "Technical Quiz", 
      desc: "Test your comprehensive technology knowledge", 
      fullDesc: "Put your tech knowledge to the test in this comprehensive quiz covering programming, data structures, algorithms, and current tech trends.",
      prize: "₹20,000",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=600&fit=crop"
    },
  ];

  const technicalEvents = [
    { id: "logic", icon: <Puzzle className="w-5 h-5" />, name: "Logic/Puzzle Coding", desc: "Solve complex algorithmic puzzles", fullDesc: "Challenge your problem-solving skills with complex algorithmic puzzles and logic-based coding challenges.", prize: "₹15,000", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop" },
    { id: "missing", icon: <Search className="w-5 h-5" />, name: "Missing Code", desc: "Find and fix hidden bugs in codebases", fullDesc: "Hunt down and fix hidden bugs in complex codebases. Test your debugging and code analysis skills.", prize: "₹10,000", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop" },
    { id: "golf", icon: <Trophy className="w-5 h-5" />, name: "Code Golf", desc: "Write shortest possible code solutions", fullDesc: "Compete to write the most concise and efficient code solutions. Every character counts in this unique challenge.", prize: "₹8,000", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop" },
    { id: "tiktik", icon: <Keyboard className="w-5 h-5" />, name: "Tik Tik Tik", desc: "Intense timed coding challenges", fullDesc: "Solve coding problems under strict time constraints. Speed and accuracy are both crucial for success.", prize: "₹10,000", image: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&h=600&fit=crop" },
    { id: "hunt", icon: <Cpu className="w-5 h-5" />, name: "Code Hunt", desc: "Find hidden codes in complex systems", fullDesc: "Navigate through complex systems to find hidden codes and solve cryptographic challenges.", prize: "₹12,000", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop" },
    { id: "version", icon: <GitBranch className="w-5 h-5" />, name: "Version Control Challenge", desc: "Master Git and collaboration", fullDesc: "Demonstrate your mastery of Git and version control in this collaborative coding challenge.", prize: "₹10,000", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop" },
    { id: "cloud", icon: <Cloud className="w-5 h-5" />, name: "Cloud Deployment", desc: "Deploy applications to cloud platforms", fullDesc: "Deploy and configure applications on cloud platforms. Show your DevOps and cloud computing skills.", prize: "₹18,000", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop" },
    { id: "database", icon: <Database className="w-5 h-5" />, name: "Database Design", desc: "Optimize complex database schemas", fullDesc: "Design and optimize complex database schemas for maximum performance and scalability.", prize: "₹15,000", image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop" },
    { id: "security", icon: <Shield className="w-5 h-5" />, name: "Cybersecurity CTF", desc: "Capture the flag security challenge", fullDesc: "Test your cybersecurity skills in this capture the flag competition. Find vulnerabilities and secure systems.", prize: "₹25,000", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop" },
  ];

  const nonTechnicalEvents = [
    {
      category: "Online Gaming Arena",
      events: [
        { id: "bgmi", icon: <Gamepad2 className="w-5 h-5" />, name: "BGMI Tournament", desc: "Battle Royale championship", fullDesc: "Compete in intense Battle Royale matches. Form squads and battle for victory in this mobile gaming championship.", prize: "₹15,000", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop" },
        { id: "freefire", icon: <Gamepad2 className="w-5 h-5" />, name: "Free Fire Showdown", desc: "Mobile gaming competition", fullDesc: "Show your skills in this exciting Free Fire tournament. Fast-paced action and strategic gameplay await.", prize: "₹10,000", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop" },
        { id: "football", icon: <Gamepad2 className="w-5 h-5" />, name: "E-Football League", desc: "Football gaming tournament", fullDesc: "Compete in virtual football matches. Show your skills in this competitive football gaming tournament.", prize: "₹8,000", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop" },
        { id: "chess", icon: <Gamepad2 className="w-5 h-5" />, name: "Chess Masters", desc: "Strategic chess tournament", fullDesc: "Demonstrate your strategic thinking in this classical chess tournament. Outwit your opponents move by move.", prize: "₹6,000", image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=600&fit=crop" },
      ],
    },
    {
      category: "Intellectual & Creative",
      events: [
        { id: "kollywood", icon: <Brain className="w-5 h-5" />, name: "Kollywood Quiz", desc: "Test your Tamil cinema knowledge", fullDesc: "Test your knowledge of Tamil cinema history, actors, directors, and iconic movies in this entertaining quiz.", prize: "₹3,000", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop" },
        { id: "anime", icon: <Brain className="w-5 h-5" />, name: "Anime Quiz", desc: "Show off your anime expertise", fullDesc: "From classic series to modern hits, test your comprehensive knowledge of anime culture and stories.", prize: "₹3,000", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&h=600&fit=crop" },
        { id: "treasure", icon: <Target className="w-5 h-5" />, name: "Treasure Hunt", desc: "Campus-wide puzzle solving game", fullDesc: "Navigate across campus solving clues and riddles to find the ultimate treasure. Teamwork is key!", prize: "₹8,000", image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&h=600&fit=crop" },
        { id: "escape", icon: <Puzzle className="w-5 h-5" />, name: "Escape Room", desc: "Team-based puzzle solving", fullDesc: "Work together to solve puzzles and escape the room before time runs out. Communication and logic are essential.", prize: "₹7,000", image: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?w=800&h=600&fit=crop" },
      ],
    },
  ];

  const getButtonStyle = (type: string) => {
    const isActive = eventType === type;
    return `px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl scale-105"
        : "bg-white/70 backdrop-blur-sm border-2 border-orange-300/50 text-gray-800 hover:bg-orange-50 hover:scale-[1.02] shadow-lg"
    }`;
  };

  const renderEventCard = (event: any, size: "large" | "small" = "small") => (
    <div
      key={event.id}
      className="relative"
      onMouseEnter={() => setHoveredEvent(event.id)}
      onMouseLeave={() => setHoveredEvent(null)}
    >
      <div
        className={`group bg-white/70 backdrop-blur-sm border-2 border-orange-300/50 rounded-2xl ${size === "large" ? "p-6" : "p-5"} hover:border-orange-500 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
      >
        <div className="flex items-start gap-4">
          <div className={`${size === "large" ? "p-4" : "p-3"} rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 group-hover:scale-110 transition-transform`}>
            <div className="text-white">{event.icon}</div>
          </div>
          <div className="flex-1">
            <h3 className={`${size === "large" ? "text-2xl" : "text-lg"} font-bold text-gray-800 mb-2`}>{event.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{event.desc}</p>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-orange-500" />
              <span className="font-bold text-orange-600">{event.prize}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Preview Card */}
      {hoveredEvent === event.id && (
        <div className="hidden lg:block absolute left-full top-0 ml-6 w-96 z-50 animate-[slideIn_0.3s_ease-out]">
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-orange-400 overflow-hidden">
            <div className="relative h-56 overflow-hidden">
              <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-2xl font-bold text-white mb-2">{event.name}</h4>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">{event.fullDesc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-orange-500" />
                  <span className="font-bold text-orange-600 text-lg">{event.prize}</span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg transition-shadow text-sm">
                  Register →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 text-gray-800 overflow-hidden pt-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4a57320_1px,transparent_1px),linear-gradient(to_bottom,#d4a57320_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-300/20 rounded-full blur-[120px] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-300/20 rounded-full blur-[100px] animate-[float_10s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10">
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-sm border-2 border-orange-400/50 rounded-full mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-semibold text-orange-700 uppercase tracking-wider">
                Technical & Cultural Festival
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-4">
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                ASTRANOVA EVENTS
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
              Choose from 30+ exciting events across multiple categories
            </p>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button onClick={() => setEventType("flagship")} className={getButtonStyle("flagship")}>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <span>Flagship Events</span>
                </div>
              </button>
              <button onClick={() => setEventType("goldenByte")} className={getButtonStyle("goldenByte")}>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <span>Golden Byte</span>
                </div>
              </button>
              <button onClick={() => setEventType("technical")} className={getButtonStyle("technical")}>
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  <span>Technical</span>
                </div>
              </button>
              <button onClick={() => setEventType("nonTechnical")} className={getButtonStyle("nonTechnical")}>
                <div className="flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5" />
                  <span>Non-Technical</span>
                </div>
              </button>
            </div>

            <div className="max-w-6xl mx-auto">
              {eventType === "flagship" && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">
                      <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        Flagship Events
                      </span>
                    </h2>
                    <p className="text-gray-600">Major competitions with highest prizes</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {flagshipEvents.map(event => renderEventCard(event, "large"))}
                  </div>
                </div>
              )}

              {eventType === "goldenByte" && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">
                      <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        Golden Byte Events
                      </span>
                    </h2>
                    <p className="text-gray-600">Premium coding and workshop events</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {goldenByteEvents.map(event => renderEventCard(event, "large"))}
                  </div>
                </div>
              )}

              {eventType === "technical" && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">
                      <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        Technical Events
                      </span>
                    </h2>
                    <p className="text-gray-600">Specialized coding challenges</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technicalEvents.map(event => renderEventCard(event, "small"))}
                  </div>
                </div>
              )}

              {eventType === "nonTechnical" && (
                <div className="space-y-12">
                  {nonTechnicalEvents.map((category, idx) => (
                    <div key={idx}>
                      <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                          <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                            {category.category}
                          </span>
                        </h2>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.events.map(event => renderEventCard(event, "small"))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/70 backdrop-blur-sm border-2 border-orange-300/50 rounded-2xl p-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 inline-block mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Event Venue</h4>
              <p className="text-gray-600 text-sm">Main Auditorium & Campus Grounds</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border-2 border-amber-300/50 rounded-2xl p-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 inline-block mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Participation</h4>
              <p className="text-gray-600 text-sm">Team size: 1-4 members • Multiple events allowed</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border-2 border-orange-300/50 rounded-2xl p-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 inline-block mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Prize Pool</h4>
              <p className="text-gray-600 text-sm">Over ₹2,00,000 in prizes and certificates</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 pb-24">
          <div className="max-w-4xl mx-auto text-center bg-white/70 backdrop-blur-sm border-2 border-orange-300/50 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Ready to <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Compete?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8">Register now for your favorite events</p>
            <button className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span>Register Now</span>
                <Rocket className="w-6 h-6" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default EventPage;