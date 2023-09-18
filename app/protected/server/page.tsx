import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function ServerProtected() {
   const session = await getServerSession(authOptions);

   return (
      <main className="min-h-page flex flex-col items-center justify-center">
         <h1>
            This is a <span className="text-red-500">SERVER</span> protected route
         </h1>
         <p>
            You are logged in as <strong>{session?.user?.name}</strong>
         </p>
      </main>
   );
}
