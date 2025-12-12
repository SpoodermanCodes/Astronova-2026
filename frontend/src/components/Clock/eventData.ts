import { DaySchedule } from './types';

export const eventSchedule: DaySchedule[] = [
  {
    day: 1,
    name: "Day 1 - Technical Thunder",
    timeSlots: [
      {
        hour: 9,
        displayTime: "9:00 AM",
        events: [
          { id: "1-9-1", name: "Code Sprint", description: "90-minute competitive coding challenge", venue: "Lab 101", type: "technical" },
          { id: "1-9-2", name: "AI Workshop", description: "Introduction to Machine Learning", venue: "Seminar Hall A", type: "technical" }
        ]
      },
      {
        hour: 10,
        displayTime: "10:00 AM",
        events: [
          { id: "1-10-1", name: "Hackathon Kickoff", description: "24-hour hackathon begins", venue: "Main Auditorium", type: "technical" },
          { id: "1-10-2", name: "Web Dev Challenge", description: "Build a website in 2 hours", venue: "Lab 203", type: "technical" }
        ]
      },
      {
        hour: 11,
        displayTime: "11:00 AM",
        events: [
          { id: "1-11-1", name: "Robotics Demo", description: "Live robot building competition", venue: "Workshop Hall", type: "technical" },
          { id: "1-11-2", name: "Cybersecurity CTF", description: "Capture The Flag competition", venue: "Lab 305", type: "technical" }
        ]
      },
      {
        hour: 12,
        displayTime: "12:00 PM",
        events: [
          { id: "1-12-1", name: "Tech Talk", description: "Industry expert session on Cloud Computing", venue: "Conference Room", type: "technical" }
        ]
      },
      {
        hour: 1,
        displayTime: "1:00 PM",
        events: [
          { id: "1-1-1", name: "Lunch Break", description: "Networking lunch with sponsors", venue: "Cafeteria", type: "non-technical" }
        ]
      },
      {
        hour: 2,
        displayTime: "2:00 PM",
        events: [
          { id: "1-2-1", name: "App Development", description: "Mobile app dev competition", venue: "Lab 102", type: "technical" },
          { id: "1-2-2", name: "Debug Derby", description: "Find and fix bugs competition", venue: "Lab 201", type: "technical" }
        ]
      },
      {
        hour: 3,
        displayTime: "3:00 PM",
        events: [
          { id: "1-3-1", name: "IoT Workshop", description: "Hands-on Internet of Things session", venue: "Electronics Lab", type: "technical" },
          { id: "1-3-2", name: "Database Design", description: "Schema design competition", venue: "Lab 104", type: "technical" }
        ]
      },
      {
        hour: 4,
        displayTime: "4:00 PM",
        events: [
          { id: "1-4-1", name: "Tech Quiz", description: "Technical trivia championship", venue: "Seminar Hall B", type: "technical" },
          { id: "1-4-2", name: "UI/UX Challenge", description: "Design a user interface", venue: "Design Studio", type: "technical" }
        ]
      },
      {
        hour: 5,
        displayTime: "5:00 PM",
        events: [
          { id: "1-5-1", name: "Project Expo", description: "Showcase your innovations", venue: "Exhibition Hall", type: "technical" }
        ]
      },
      {
        hour: 6,
        displayTime: "6:00 PM",
        events: [
          { id: "1-6-1", name: "Gaming Tournament", description: "E-sports competition", venue: "Gaming Arena", type: "non-technical" },
          { id: "1-6-2", name: "Tech Standup", description: "Comedy meets technology", venue: "Open Stage", type: "non-technical" }
        ]
      },
      {
        hour: 7,
        displayTime: "7:00 PM",
        events: [
          { id: "1-7-1", name: "Hackathon Checkpoint", description: "Mid-way presentations", venue: "Main Auditorium", type: "technical" }
        ]
      },
      {
        hour: 8,
        displayTime: "8:00 PM",
        events: [
          { id: "1-8-1", name: "DJ Night", description: "Music and celebration", venue: "Open Ground", type: "non-technical" }
        ]
      }
    ]
  },
  {
    day: 2,
    name: "Day 2 - Creative Carnival",
    timeSlots: [
      {
        hour: 9,
        displayTime: "9:00 AM",
        events: [
          { id: "2-9-1", name: "Photography Walk", description: "Campus photo hunt", venue: "Campus Grounds", type: "non-technical" },
          { id: "2-9-2", name: "Debate Championship", description: "Battle of words", venue: "Seminar Hall A", type: "non-technical" }
        ]
      },
      {
        hour: 10,
        displayTime: "10:00 AM",
        events: [
          { id: "2-10-1", name: "Dance Competition", description: "Solo and group performances", venue: "Main Auditorium", type: "non-technical" },
          { id: "2-10-2", name: "Art Exhibition", description: "Display your artwork", venue: "Art Gallery", type: "non-technical" }
        ]
      },
      {
        hour: 11,
        displayTime: "11:00 AM",
        events: [
          { id: "2-11-1", name: "Fashion Show", description: "Designer wear showcase", venue: "Main Stage", type: "non-technical" },
          { id: "2-11-2", name: "Poetry Slam", description: "Express yourself in verses", venue: "Literary Corner", type: "non-technical" }
        ]
      },
      {
        hour: 12,
        displayTime: "12:00 PM",
        events: [
          { id: "2-12-1", name: "Cooking Competition", description: "Master Chef challenge", venue: "Food Court", type: "non-technical" },
          { id: "2-12-2", name: "Band Performance", description: "Battle of the bands", venue: "Open Stage", type: "non-technical" }
        ]
      },
      {
        hour: 1,
        displayTime: "1:00 PM",
        events: [
          { id: "2-1-1", name: "Lunch & Networking", description: "Cultural exchange lunch", venue: "Cafeteria", type: "non-technical" }
        ]
      },
      {
        hour: 2,
        displayTime: "2:00 PM",
        events: [
          { id: "2-2-1", name: "Treasure Hunt", description: "Campus-wide adventure", venue: "Starting: Main Gate", type: "non-technical" },
          { id: "2-2-2", name: "Drama Performance", description: "Street play competition", venue: "Open Theatre", type: "non-technical" }
        ]
      },
      {
        hour: 3,
        displayTime: "3:00 PM",
        events: [
          { id: "2-3-1", name: "Singing Competition", description: "Solo vocals showcase", venue: "Music Room", type: "non-technical" },
          { id: "2-3-2", name: "Mime Act", description: "Silent storytelling", venue: "Drama Hall", type: "non-technical" }
        ]
      },
      {
        hour: 4,
        displayTime: "4:00 PM",
        events: [
          { id: "2-4-1", name: "Sports Finals", description: "Cricket and football finals", venue: "Sports Ground", type: "non-technical" },
          { id: "2-4-2", name: "Stand-up Comedy", description: "Laughter unlimited", venue: "Comedy Club", type: "non-technical" }
        ]
      },
      {
        hour: 5,
        displayTime: "5:00 PM",
        events: [
          { id: "2-5-1", name: "Hackathon Finals", description: "Final presentations", venue: "Main Auditorium", type: "technical" },
          { id: "2-5-2", name: "Flash Mob", description: "Surprise performances", venue: "Central Plaza", type: "non-technical" }
        ]
      },
      {
        hour: 6,
        displayTime: "6:00 PM",
        events: [
          { id: "2-6-1", name: "Award Ceremony", description: "Recognizing the winners", venue: "Main Auditorium", type: "non-technical" }
        ]
      },
      {
        hour: 7,
        displayTime: "7:00 PM",
        events: [
          { id: "2-7-1", name: "Celebrity Performance", description: "Special guest appearance", venue: "Main Stage", type: "non-technical" }
        ]
      },
      {
        hour: 8,
        displayTime: "8:00 PM",
        events: [
          { id: "2-8-1", name: "Closing Ceremony", description: "Grand finale and fireworks", venue: "Open Ground", type: "non-technical" }
        ]
      }
    ]
  }
];
