import { Wifi } from "@prisma/client";

export type IWifiType = Omit<Wifi, 'id'>