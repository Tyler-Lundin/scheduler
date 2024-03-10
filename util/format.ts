import { time } from "@/types/types"

export function formatTime({ hour, minute }: time): string {
  let formattedTime = ""
  if (hour <= 9) formattedTime += `0${hour}`
  else formattedTime += `${hour}`
  formattedTime += ":"
  if (minute <= 9) formattedTime += `0${minute}`
  else formattedTime += `${minute}`
  return (formattedTime)
}

export function formatDate(date: Date): string {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().slice(2, 4)}`
}
