import React from 'react';

interface ClockHandsProps {
  selectedHour: number;
}

const ClockHands: React.FC<ClockHandsProps> = ({ selectedHour }) => {
  // Convert 12-hour to angle (12 = 0°, 3 = 90°, etc.)
  const hourAngle = ((selectedHour % 12) / 12) * 360;
  
  // Minute hand at 12 (0 degrees)
  const minuteAngle = 0;
  
  // Second hand animation
  const [secondAngle, setSecondAngle] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSecondAngle(prev => (prev + 6) % 360);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      {/* Hour hand */}
      <div
        style={{
          position: 'absolute',
          width: '6px',
          height: '28%',
          background: 'linear-gradient(to top, hsl(43, 74%, 49%), hsl(43, 80%, 65%))',
          borderRadius: '3px',
          transformOrigin: 'bottom center',
          transform: `translateY(-50%) rotate(${hourAngle}deg)`,
          boxShadow: '0 0 10px hsl(43, 74%, 49%, 0.5)',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 15,
        }}
      />
      
      {/* Minute hand */}
      <div
        style={{
          position: 'absolute',
          width: '4px',
          height: '35%',
          background: 'linear-gradient(to top, hsl(0, 0%, 70%), hsl(0, 0%, 85%))',
          borderRadius: '2px',
          transformOrigin: 'bottom center',
          transform: `translateY(-50%) rotate(${minuteAngle}deg)`,
          boxShadow: '0 0 8px hsl(0, 0%, 70%, 0.5)',
          zIndex: 14,
        }}
      />
      
      {/* Second hand */}
      <div
        style={{
          position: 'absolute',
          width: '2px',
          height: '40%',
          background: 'hsl(0, 70%, 50%)',
          borderRadius: '1px',
          transformOrigin: 'bottom center',
          transform: `translateY(-50%) rotate(${secondAngle}deg)`,
          boxShadow: '0 0 6px hsl(0, 70%, 50%, 0.5)',
          transition: 'transform 0.1s linear',
          zIndex: 16,
        }}
      />
      
      {/* Center cap */}
      <div
        style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          background: 'radial-gradient(circle, hsl(43, 74%, 55%) 0%, hsl(43, 74%, 35%) 100%)',
          borderRadius: '50%',
          boxShadow: '0 0 15px hsl(43, 74%, 49%, 0.5), inset 0 2px 4px hsl(0, 0%, 100%, 0.3)',
          zIndex: 17,
        }}
      />
    </div>
  );
};

export default ClockHands;
