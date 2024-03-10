import { Day, day } from "@/types/types";
import { createDay } from "./creators";
import GenerateDefaultSlots from "./GenerateDefaultSlots";
import addDaysToDate from "./AddDaysToDate";

const daysOfTheWeek: day[] = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]

export default function GenerateDefaultDays(): Day[] {
  const generatedDays: Day[] = []
  const initialDate = new Date();
  console.log(initialDate)

  daysOfTheWeek.forEach((currentDay, index) => {
    generatedDays.push(createDay(currentDay, GenerateDefaultSlots(), addDaysToDate(initialDate, index)))
  })
  return generatedDays
}
