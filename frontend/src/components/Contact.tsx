import React from 'react';
import { Mail, Phone, MapPin, Clock, Globe, Facebook, Twitter, Instagram, Linkedin, Users, Calendar, Navigation } from 'lucide-react';
import Footer from './footer.tsx'; // Add this import

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  link?: string;
  linkText?: string;
  action?: 'call' | 'mailto';
  color?: string;
}

const Contact: React.FC = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: <MapPin className="text-2xl text-orange-600" />,
      title: "Event Venue",
      details: [
        "Coimbatore Institute of Technology",
        "Civil Aerodrome Post",
        "Avinashi Road, Coimbatore",
        "Tamil Nadu 641014, India"
      ],
      link: "https://maps.google.com/?q=Coimbatore+Institute+of+Technology+Avinashi+Road",
      linkText: "Open in Maps",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Users className="text-2xl text-amber-600" />,
      title: "Contact Persons",
      details: [
        "Akilesh: +91 87781 19280",
        "Ghayathri: +91 94889 34335"
      ],
      action: "call",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: <Mail className="text-2xl text-orange-700" />,
      title: "Email Address",
      details: [
        "astranova@cit.edu.in",
        "123@gmail.com (Temporary)"
      ],
      action: "mailto",
      color: "from-orange-600 to-orange-700"
    },
    {
      icon: <Calendar className="text-2xl text-amber-700" />,
      title: "Event Dates",
      details: [
        "January 23, 2026",
        "January 24, 2026"
      ],
      color: "from-amber-600 to-amber-700"
    },
    {
      icon: <Clock className="text-2xl text-orange-800" />,
      title: "Event Timings",
      details: [
        "Day 1: 9:00 AM - 9:00 PM",
        "Day 2: 9:00 AM - 8:00 PM"
      ],
      color: "from-orange-700 to-orange-800"
    },
    {
      icon: <Navigation className="text-2xl text-amber-800" />,
      title: "How to Reach",
      details: [
        "📍 Near Peelamedu Airport",
        "🚗 15 mins from Coimbatore Junction",
        "✈️ 10 mins from Coimbatore Airport",
        "🚌 Multiple bus routes available"
      ],
      color: "from-amber-700 to-amber-800"
    }
  ];

  const socialLinks = [
    { icon: <Facebook />, label: "Facebook", href: "#", color: "bg-orange-600 hover:bg-orange-700" },
    { icon: <Twitter />, label: "Twitter", href: "#", color: "bg-amber-600 hover:bg-amber-700" },
    { icon: <Instagram />, label: "Instagram", href: "#", color: "bg-orange-700 hover:bg-orange-800" },
    { icon: <Linkedin />, label: "LinkedIn", href: "#", color: "bg-amber-700 hover:bg-amber-800" },
  ];

  const handleContactAction = (info: ContactInfo) => {
    if (info.action === 'call') {
      const phoneNumber = info.details[0].includes('Akhilesh') ? '+918778119280' : '+919488934335';
      window.open(`tel:${phoneNumber}`, '_blank');
    } else if (info.action === 'mailto') {
      window.open('mailto:astranova@cit.edu.in', '_blank');
    } else if (info.link) {
      window.open(info.link, '_blank');
    }
  };

  const getButtonColor = (info: ContactInfo): string => {
    if (info.color) return info.color;
    if (info.action === 'call') return "from-amber-500 to-amber-600";
    if (info.action === 'mailto') return "from-orange-600 to-orange-700";
    if (info.link) return "from-orange-500 to-orange-600";
    return "from-amber-600 to-amber-700";
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Contact Content */}
      <div className="flex-grow relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 text-gray-800 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4a57320_1px,transparent_1px),linear-gradient(to_bottom,#d4a57320_1px,transparent_1px)] bg-[size:64px_64px] animate-[grid_20s_linear_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-100/50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 via-transparent to-orange-200/20" />
          
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-[120px] animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-300/20 rounded-full blur-[100px] animate-[float_10s_ease-in-out_infinite]" />
          
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full animate-[twinkle_3s_ease-in-out_infinite]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.4 + 0.2
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full blur-xl opacity-70 animate-pulse" />
                <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-full">
                  <Globe className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-4">
              Reach out to the ASTRANOVA 2026 team for inquiries, partnerships, or any questions
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-sm border-2 border-orange-400/50 rounded-full shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute h-full w-full rounded-full bg-orange-500 opacity-75" />
                <span className="relative h-3 w-3 rounded-full bg-gradient-to-r from-orange-600 to-amber-600" />
              </span>
              <span className="text-gray-700 font-semibold">Coimbatore Institute of Technology</span>
            </div>
          </div>

          {/* Contact Cards Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
  {contactInfo.map((info, index) => {
    const buttonColor = getButtonColor(info);
    const buttonText = info.linkText || 
                      (info.action === 'call' ? 'Call Now' : 
                       info.action === 'mailto' ? 'Send Email' : 
                       'View Details');
    
    return (
      <div 
        key={index}
        className="group relative overflow-hidden bg-gradient-to-br from-white/90 to-orange-50/90 backdrop-blur-xl border-2 border-orange-200/70 rounded-3xl p-6 hover:border-orange-400 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl shadow-lg"
        style={{
          animationDelay: `${index * 100}ms`
        }}
      >
        {/* Floating background orb */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${info.color || 'from-orange-400/20 to-amber-400/20'} rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`} />
        
        {/* Animated border on hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/0 via-orange-400/20 to-orange-400/0 animate-[shimmer_2s_linear_infinite] bg-[length:200%_100%]" />
        </div>
        
        {/* Top accent line */}
        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r ${info.color || 'from-orange-500 to-amber-500'} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-32`} />
        
        <div className="relative">
          {/* Icon container with floating effect */}
          <div className="flex items-start space-x-4 mb-6">
            <div className="flex-shrink-0 relative">
              {/* Icon glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${info.color || 'from-orange-400 to-amber-400'} rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-[pulse_3s_ease-in-out_infinite]`} />
              
              {/* Icon container */}
              <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${info.color || 'from-orange-500 to-amber-500'} border-2 border-white/50 shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <div className="text-white">
                  {/* Check if icon is a React element before cloning */}
                  {React.isValidElement(info.icon) ? (
                    React.cloneElement(info.icon as React.ReactElement<any>, {
                      className: "w-6 h-6 group-hover:w-7 group-hover:h-7 transition-all duration-300"
                    })
                  ) : (
                    <div className="w-6 h-6 group-hover:w-7 group-hover:h-7 transition-all duration-300">
                      {info.icon}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Number indicator */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xs font-bold">{index + 1}</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                  {info.title}
                </h3>
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-ping opacity-75" />
              </div>
              
              <ul className="space-y-3">
                {info.details.map((detail, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start text-gray-700 text-sm md:text-base group/item"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 mt-2 mr-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Action Button */}
          {(info.action || info.link) && (
            <div className="relative mt-8 pt-4 border-t border-orange-200/50">
              <button
                onClick={() => handleContactAction(info)}
                className={`relative w-full py-4 px-6 bg-gradient-to-r ${buttonColor} text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group/btn overflow-hidden shadow-lg`}
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </div>
                
                {/* Button content */}
                <div className="relative flex items-center justify-center space-x-3">
                  <span className="text-lg">{buttonText}</span>
                  <div className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {info.action === 'call' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      ) : info.action === 'mailto' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      )}
                    </svg>
                  </div>
                </div>
                
                {/* Button corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/50 rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/50 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/50 rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/50 rounded-br-xl" />
              </button>
              
              {/* Subtle help text */}
              <p className="text-xs text-gray-500 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to {info.action === 'call' ? 'call' : info.action === 'mailto' ? 'email' : 'view'} instantly
              </p>
            </div>
          )}
        </div>
      </div>
    );
  })}
</div>
         
        </div>
      </div>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Contact;