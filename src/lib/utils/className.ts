import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const className = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export default className;
