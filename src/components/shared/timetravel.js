function startOfWeek(date) {
  const diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1)
  return new Date(date.setDate(diff))
}

function endOfWeek(date) {
  const diff =
    date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1) + 6
  return new Date(date.setDate(diff))
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

export const WeekString = () => {
  const oldTime = new Date(new Date().getTime() - 60 * 60 * 24 * 7 * 1000)
  const weekStart = startOfWeek(oldTime).getDate().toLocaleString()
  const weekEnd = endOfWeek(oldTime).getDate().toLocaleString()
  const month_1 = months[startOfWeek(oldTime).getMonth()]
  const month_2 = months[endOfWeek(oldTime).getMonth()]
  const year = oldTime.getFullYear().toString()
  const week = `${month_1} ${weekStart} - ${month_2} ${weekEnd}, ${year}`
  return `${week}`
}

export const CurTime = () => {
  const curDate = new Date()
  const curTime = `${
    months[curDate.getMonth()]
  } ${curDate.getDate()}, ${curDate.getFullYear()}`
  return `${curTime}`
}

export const timezones = [
  "Greenwich Mean Time (GMT)",
  "European Central Time (GMT+1:00)",
  "Eastern European Time (GMT+2:00)",
  "Egypt Standard Time (GMT+2:00)",
  "Eastern African Time (GMT+3:00)",
  "Middle East Time (GMT+3:30)",
  "Near East Time (GMT+4:00)",
  "Pakistan Lahore Time (GMT+5:00)",
  "India Standard Time (GMT+5:30)",
  "Bangladesh Standard Time (GMT+6:00)",
  "Vietnam Standard Time (GMT+7:00)",
  "China Taiwan Time (GMT+8:00)",
  "Japan Standard Time (GMT+9:00)",
  "Australia Central Time (GMT+9:30)",
  "Australia Eastern Time (GMT+10:00)",
  "Solomon Standard Time (GMT+11:00)",
  "New Zealand Standard Time (GMT+12:00)",
  "Midway Islands Time (GMT-11:00)",
  "Hawaii Standard Time (GMT-10:00)",
  "Alaska Standard Time (GMT-9:00)",
  "Pacific Standard Time (GMT-8:00)",
  "Phoenix Standard Time (GMT-7:00)",
  "Mountain Standard Time (GMT-7:00)",
  "Central Standard Time (GMT-6:00)",
  "Eastern Standard Time (GMT-5:00)",
  "Indiana Eastern Standard Time (GMT-5:00)",
  "Puerto Rico & US Virgin Islands Time (GMT-4:00)",
  "Canada Newfoundland Time (GMT-3:30)",
  "Argentina Standard Time (GMT-3:00)",
  "Brazil Eastern Time (GMT-3:00)",
  "Central African Time (GMT-1:00)",
]

export function formatDate(date) {
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}
