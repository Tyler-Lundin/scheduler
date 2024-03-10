"use client"
import { Day, slot } from "@/types/types";
import GenerateDefaultDays from "@/util/GenerateDefaultDays";
import { formatDate, formatTime } from "@/util/format";
import { useEffect, useState } from "react";

const SchedulerRoot = () => {
  const [days, setDays] = useState<Day[]>([])
  const [selectedDay, setSelectedDay] = useState();
  const [selectedSlots, setSelectedSlots] = useState<[string]>();
  useEffect(() => {
    setDays(GenerateDefaultDays());
  }, [])
  console.log({ days })

  return (
    <ol className="min-w-96 grid items-center justify-around grid-cols-7">
      {days.map((day, dayIndex) => {
        return (
          <div key={`${day.day}-${day.date.toString()}`} className={`grid transition-all`}>
            <div className="grid grid-cols-2">
              <h6 className="text-xs pl-1"> {day.day.slice(0, 3)} </h6>
              <h6 className="text-xs pr-1 text-right"> {formatDate(day.date)} </h6>
            </div>
            <ol className="h-64 overflow-y-auto pb-16 overflow-x-hidden">
              {
                day.timeSlots.map((slot, slotIndex) => (
                  <li key={`${day.day} ${slot.time.hour}:${slot.time.minute}`} className={`h-12 cursor-pointer group border border-black/5 p-1 transition-all hover:z-10 ${dayIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
                    <small className="text-xs group-hover:font-bold transition-all">{formatTime(slot.time)}</small>
                  </li>
                ))
              }
            </ol>
          </div>
        )
      })}
    </ol>
  )
}

export default SchedulerRoot;
