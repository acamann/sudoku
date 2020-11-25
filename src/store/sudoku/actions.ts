import { FETCH_PUZZLE } from "./types";

export const getPuzzle = (difficulty: "easy" | "medium" | "hard" = "medium") => ({
  type: FETCH_PUZZLE,
  payload: { difficulty },
});