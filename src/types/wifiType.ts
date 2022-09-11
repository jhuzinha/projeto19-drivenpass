import { Wifi } from "@prisma/client";

export type IWifiType = Omit<Wifi, 'id' | 'usersId'>
export type IWifiInsert = Omit<Wifi, 'id'>
export type IWifiMap = Omit<Wifi, 'usersId' | 'password'>