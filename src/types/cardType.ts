import { Cards } from "@prisma/client";

export type ICardsType = Omit<Cards, 'id' | 'usersId'>;