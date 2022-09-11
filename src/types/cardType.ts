import { Cards } from "@prisma/client";

export type ICardsType = Omit<Cards, 'id' | 'usersId'>;
export type ICardsInsert = Omit<Cards, 'id'>
export type ICardsMap = Omit<Cards, 'usersId' | 'password' | 'userName'>