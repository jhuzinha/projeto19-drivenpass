import { Credentials } from "@prisma/client";

export type ICredentialsType = Omit<Credentials, 'id'>