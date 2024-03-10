import { slot, event, time } from "@/types/types"


const defaults: { slotSize: time, openTime: time, closeTime: time } = {
  slotSize: createTime(0, 30),
  openTime: createTime(9, 0),
  closeTime: createTime(17, 0),
}

function createSlot(time: time, event?: event): slot { return { time, event } }
function createTime(hour: number, minute: number): time { return { hour, minute } }
function createEvent(title: string, description: string): event { return { title, description } }

function addTime(t1: time, t2: time): time {
  const minutes = t1.minute + t2.minute
  const hours = t1.hour + t2.hour
  return {
    hour: minutes >= 60 ? hours + 1 : hours,
    minute: minutes >= 60 ? minutes - 60 : minutes,
  }
}

function isTimeEqual(t1: time, t2: time): boolean { return t1.hour === t2.hour && t1.minute === t2.minute }


export default function GenerateDefaultSlots(): slot[] {
  let slotTime = defaults.openTime
  const generatedSlots: slot[] = [createSlot(slotTime)]
  let maxAttempts = 50;
  let currentAttempt = 0
  while (slotTime.hour <= defaults.closeTime.hour || currentAttempt >= maxAttempts) {
    let newSlot: slot = createSlot(addTime(slotTime, defaults.slotSize))
    generatedSlots.push(newSlot)
    if (isTimeEqual(newSlot.time, defaults.closeTime)) break;
    slotTime = addTime(slotTime, defaults.slotSize)
    currentAttempt++;
  }
  return generatedSlots;
}
