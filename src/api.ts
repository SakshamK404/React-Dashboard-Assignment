import { RootObject } from "./types";

const API_URL = "/data.json";

export async function fetchActivityData(): Promise<RootObject> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch activity data");
  }
  return response.json();
}
