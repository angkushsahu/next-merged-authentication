import { connect, connections } from "mongoose";

export default async function connectDatabase() {
   if (connections[0].readyState) return true;

   try {
      await connect(process.env.DATABASE_URI as string);
      console.log("Connected to database successfully");
      return true;
   } catch (err) {
      console.error("Some error occurred while connecting to the database", err);
   }
}
