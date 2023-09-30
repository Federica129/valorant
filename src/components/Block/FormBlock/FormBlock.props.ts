import { Character } from "../../../../types/characterVal";

export interface FormBlockProps {
  data: Pick<Character, "displayName" | "displayIcon">[];
}
