export default function addDaysToDate(date: Date, dayOffset: number) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + dayOffset);
  return newDate;
}
