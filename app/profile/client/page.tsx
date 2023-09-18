"use client";

import { useSession } from "next-auth/react";
import ProfileDetails from "../details";
import UpdateProfile from "../updateProfile";

export default function ClientProfile() {
   const { data: session } = useSession();

   return (
      <main>
         <h1 className="text-2xl">
            <span className="text-red-500">Client</span> Profile
         </h1>
         {session?.user ? <ProfileDetails user={session.user} /> : null}
         {session?.user ? <UpdateProfile user={session.user} /> : null}
      </main>
   );
}
