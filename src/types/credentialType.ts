import { Credentials } from "@prisma/client";

export type ICredentialsType = Omit<Credentials, 'id' | 'usersId'>
export type ICredentialsInsert = Omit<Credentials, 'id'>
export type ICredentialMap = Omit<Credentials, 'usersId' | 'password' | 'userName'>