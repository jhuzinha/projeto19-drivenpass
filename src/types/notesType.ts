import { Notes } from "@prisma/client";

export type INotesType = Omit<Notes, 'id' | 'usersId'>;
export type INotesInsert = Omit<Notes, 'id'>