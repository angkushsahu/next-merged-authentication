import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import ProfileDetails from "../details";

export default async function ServerProfile() {
   const session = await getServerSession(authOptions);

   return (
      <main>
         <h1 className="text-2xl">
            <span className="text-red-500">Server</span> Profile
         </h1>
         {session?.user ? <ProfileDetails user={session.user} /> : null}
      </main>
   );
}
