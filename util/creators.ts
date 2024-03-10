import { slot, event, time, Day, day } from "@/types/types"
import { v4 } from "uuid";

export function createSlot(time: time, event?: event): slot { return { time, event } }
export function createTime(hour: number, minute: number): time { return { hour, minute } }
export function createEvent(title: string, description: string): event { return { title, description } }
export function createDay(day: day, timeSlots: slot[], date: Date, id: string = v4()): Day { return { day, timeSlots, date, id } }

