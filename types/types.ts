
type day = "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY"

type event = {
  title: string,
  description: string,
}

type slot = {
  time: time,
  event?: event,
}


interface Day {
  id: string | number,
  day: day,
  timeSlots: slot[],
  date: Date
}

type time = {
  hour: number,
  minute: number,
}

export type {
  day,
  event,
  slot,
  Day,
  time,
}
