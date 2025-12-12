import React from 'react';

interface DaySelectorProps {
  selectedDay: 1 | 2;
  onDayChange: (day: 1 | 2) => void;
}

const DaySelector: React.FC<DaySelectorProps> = ({ selectedDay, onDayChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        padding: '6px',
        background: 'hsl(0, 0%, 6%)',
        borderRadius: '30px',
        border: '1px solid hsl(43, 30%, 20%)',
      }}
    >
      {[1, 2].map((day) => (
        <button
          key={day}
          onClick={() => onDayChange(day as 1 | 2)}
          style={{
            padding: '10px 24px',
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            color: selectedDay === day ? 'hsl(0, 0%, 3%)' : 'hsl(45, 30%, 70%)',
            background: selectedDay === day
              ? 'linear-gradient(135deg, hsl(43, 74%, 49%) 0%, hsl(43, 80%, 40%) 100%)'
              : 'transparent',
            border: 'none',
            borderRadius: '24px',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: selectedDay === day
              ? '0 4px 15px hsl(43, 74%, 49%, 0.4)'
              : 'none',
          }}
          onMouseEnter={(e) => {
            if (selectedDay !== day) {
              e.currentTarget.style.background = 'hsl(43, 74%, 49%, 0.15)';
              e.currentTarget.style.color = 'hsl(43, 74%, 49%)';
            }
          }}
          onMouseLeave={(e) => {
            if (selectedDay !== day) {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'hsl(45, 30%, 70%)';
            }
          }}
        >
          Day {day}
        </button>
      ))}
    </div>
  );
};

export default DaySelector;
