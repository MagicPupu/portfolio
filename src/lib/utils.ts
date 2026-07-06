import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const BIRTHDATE = new Date(2003, 5, 17)

export function getAge(): number {
  const now = new Date()
  let age = now.getFullYear() - BIRTHDATE.getFullYear()
  const hasHadBirthdayThisYear =
    now.getMonth() > BIRTHDATE.getMonth() ||
    (now.getMonth() === BIRTHDATE.getMonth() && now.getDate() >= BIRTHDATE.getDate())
  if (!hasHadBirthdayThisYear) age--
  return age
}
