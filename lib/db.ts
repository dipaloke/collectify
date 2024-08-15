// import { Pool, neonConfig } from "@neondatabase/serverless";
// import { PrismaNeon } from "@prisma/adapter-neon";

// // import dotenv from "dotenv";
// import ws from "ws";
import { PrismaClient } from "@prisma/client";

// dotenv.config();

// neonConfig.webSocketConstructor = ws;

// const connectionString = process.env.DATABASE_URL as string;

//  if (!connectionString) {
//   console.error("cant get DATABASE_URL")
//    throw new Error("DATABASE_URL IS MISSING");
// }

// const pool = new Pool({ connectionString });
// const adapter = new PrismaNeon(pool);
// export const db = new PrismaClient({ adapter });

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
