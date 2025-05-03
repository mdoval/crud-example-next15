import { db } from "@/db/data";
import { Client } from "@/types/ClientsType";

export async function getClients(): Promise<Client[]> {
    return db
}

