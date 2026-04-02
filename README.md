# ASTRANOVA 2024 - Technical and Cultural Fest Website

A responsive React application for ASTRANOVA 2024, built with an interactive event schedule, animated components, and a custom dark-themed UI.

## Features

- Interactive watch-style event scheduler with auto-advancing time slots
- Comprehensive event listing with categories, rules, and registration details
- Mobile-first responsive layouts
- Smooth transitions, gear animations, and interactive card effects
- Auto-hide navigation header (similar to a Windows taskbar)
- Live countdown timer to the event start date
- Dark and light theme toggle

## Tech Stack

- React 19.2.1
- TypeScript
- Tailwind CSS 3.4.18
- React Router DOM 7.10.1
- Lucide React icons
- PostCSS and Autoprefixer

## Project Structure

```
src/
├── components/
│   ├── Clock/                    # Interactive watch-style scheduler
│   │   ├── WatchClock.tsx
│   │   ├── ClockHands.tsx
│   │   ├── ClockNumber.tsx
│   │   ├── EventDisplay.tsx
│   │   ├── DaySelector.tsx
│   │   ├── Gear.tsx
│   │   ├── GearMechanism.tsx
│   │   ├── eventData.ts
│   │   └── types.ts
│   │
│   ├── EventPage/
│   │   ├── EventPage.tsx
│   │   ├── EventHeader.tsx
│   │   ├── EventGrid.tsx
│   │   ├── EventCard.tsx
│   │   ├── EventDetail.tsx
│   │   ├── CategoryTabs.tsx
│   │   ├── DaySelector.tsx
│   │   ├── eventsData.ts
│   │   └── eventRules.ts
│   │
│   ├── CircuitTimeline/
│   │   ├── CircuitTimeline.tsx
│   │   ├── CircuitNode.tsx
│   │   └── CircuitBackground.tsx
│   │
│   ├── Registration/
│   ├── pageheader.tsx
│   ├── footer.tsx
│   └── Contact.tsx
│
├── Intropage/
│   └── Intro.tsx
│
├── App.js
├── index.css
└── index.js
```

## Key Components

**Clock Schedule (`/clock`)** — The main schedule view. Click any hour number on the watch face to jump to events at that time. It auto-advances every 3 seconds if left idle. Background gear animations run continuously. Toggle between Day 1 (Technical) and Day 2 (Cultural) using the day selector.

**Event Management (`/events`)** — Lists all events with filtering by category (Flagship, Technical, Non-technical, Games) and by day. Each card opens a modal with full details including rules, prizes, and coordinator contact info.

**Navigation Header** — Hides on scroll down and reappears when scrolling up. Stays permanently visible on the landing page. Includes a mobile hamburger menu and theme toggle.

**Landing Page (`/`)** — Animated gradient title, live countdown broken into days/hours/minutes/seconds, and floating background effects.

## Getting Started

**Prerequisites:** Node.js v14 or higher, npm or yarn.

```bash
git clone <repository-url>
cd frontend
npm install
npm start
```

Open `http://localhost:3000` in your browser.

**Available scripts:**

- `npm start` — development server
- `npm build` — production build
- `npm test` — runs the test suite
- `npm eject` — ejects from Create React App (irreversible)

## Routes

| Path | Page |
|---|---|
| `/` | Landing page with countdown |
| `/events` | Event listing and filtering |
| `/clock` | Interactive clock schedule |
| `/CircuitTimeline` | Alternative timeline view |
| `/contact` | Contact information |
| `/registration` | Event registration |

## Configuration

**Event schedule data** — `src/components/Clock/eventData.ts`

**Event details** — `src/components/EventPage/eventsData.ts`

**Event rules** — `src/components/EventPage/eventRules.ts`

**Countdown date** — `src/Intropage/Intro.tsx`

**Theme and colors** — `tailwind.config.js` and `src/index.css`

---

## Note

The clock auto-advance interval is currently set to 3 seconds. This felt right during testing but might be too fast or too slow depending on how many events are packed into a time slot. Worth revisiting before the actual event day when coordinators are using it to check the schedule.

The `CircuitTimeline` route exists as an alternative to the clock view but was not fully integrated into the main navigation — it's accessible by URL but there's no link to it from the header. Either add it to the nav or remove it before deploying.

---

## Note to Self

The `eventsData.ts` and `eventData.ts` files are separate and need to be kept in sync manually. If someone updates event timings in one, they have to remember to update the other, which is easy to miss. Should probably consolidate these into a single source of truth and derive both the clock and event listing from the same data.

Also, the registration page under `src/components/Registration/` looks incomplete as of the last check. Make sure this is actually wired up to a backend or form handler before the fest or people will submit forms into the void.

---

## License

Private and proprietary to ASTRANOVA 2024.
