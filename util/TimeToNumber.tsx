

export default function TimeToNumber(time: string) {
  return Number(time.split(":").join(""));
}
