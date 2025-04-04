import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function from shadcn/ui for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
