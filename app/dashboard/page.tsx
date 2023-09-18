import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import SignOut from "./signOut";

export default async function Dashboard() {
   const session = await getServerSession(authOptions);

   return (
      <main className="min-h-page flex items-center justify-center flex-col">
         {session?.user?.image ? <img src={session?.user?.image as string} alt="image" /> : null}
         <h1>
            You are logged in as <strong>{session?.user?.name}</strong>
         </h1>
         <h1>Email: {session?.user?.email}</h1>
         <SignOut />
      </main>
   );
}
