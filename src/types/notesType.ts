import { Notes } from "@prisma/client";

export type INotesType = Omit<Notes, 'id'>;