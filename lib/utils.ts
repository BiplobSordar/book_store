import { clsx, type ClassValue } from "clsx";
import crypto from "crypto";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getPublicIdFromUrl = (url: any) => {
  const regex = /\/v\d+\/([^/]+)\.\w{3,4}$/;
  const match = url.match(regex);
  return match ? match[1] : null;
};
export const generateSignature = (publicId: string, api_secret: string) => {
  const timestamp = new Date().getTime();
  return `public_id=${publicId}&timestamp=${timestamp}${api_secret}`;
};

export const generateSHA1 = (data: any) => {
  const hash = crypto.createHash("sha1");
  hash.update(data);
  return hash.digest("hex");
};
