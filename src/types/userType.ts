import { Users } from "@prisma/client";

export type IUsersType = Omit<Users, 'id'>;