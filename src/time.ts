export type TimeKey = 'morning' | 'afternoon' | 'evening' | 'night'

export const TIME_KEYS: TimeKey[] = ['morning', 'afternoon', 'evening', 'night']

export function autoTime(date = new Date()): TimeKey {
  const h = date.getHours()
  if (h >= 5 && h < 12) return 'morning'
  if (h >= 12 && h < 17) return 'afternoon'
  if (h >= 17 && h < 21) return 'evening'
  return 'night'
}

export const GREETINGS: Record<TimeKey, string> = {
  morning: 'Good morning.',
  afternoon: 'Good afternoon.',
  evening: 'Good evening.',
  night: 'Burning the midnight oil.',
}
