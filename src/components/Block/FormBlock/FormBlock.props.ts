import { Character } from "../../../../types/characterVal";

export type FormBlockProps = Pick<
  Character,
  "displayName" | "displayIcon" | "uuid"
>;
