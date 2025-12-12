export interface Event {
  id: string;
  name: string;
  description: string;
  venue: string;
  type: 'technical' | 'non-technical';
}

export interface TimeSlot {
  hour: number;
  displayTime: string;
  events: Event[];
}

export interface DaySchedule {
  day: 1 | 2;
  name: string;
  timeSlots: TimeSlot[];
}
