"use client";

import { useSession } from "next-auth/react";

export default function ClientProtected() {
   const { data: session } = useSession();

   return (
      <main className="min-h-page flex flex-col items-center justify-center">
         <h1>
            This is a <span className="text-red-500">CLIENT</span> protected route
         </h1>
         <p>
            You are logged in as <strong>{session?.user?.name}</strong>
         </p>
      </main>
   );
}
