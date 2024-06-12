import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const handleError = (error: unknown) => {
  console.error(error)
  throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file)


export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  // startDate: new Date(),
  // endDate: new Date(),
  categories: [],
  price: 0,
  isFree: false,
  url: '',
};

export const truncateText = (text: string, wordLimit: number): string => {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};