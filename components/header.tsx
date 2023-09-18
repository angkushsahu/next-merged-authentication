import * as url from "@/constants/routes";
import { getServerSession } from "next-auth/next";
import Link from "next/link";

export default async function Header() {
   const session = await getServerSession();

   const protectedRoutes = [
      { title: "Profile (client)", path: url.profileFromClient },
      { title: "Profile (server)", path: url.profileFromServer },
      { title: "Dashboard", path: url.dashboard },
   ];

   const publicRoutes = [
      { title: "Login", path: url.login },
      { title: "Signup", path: url.signup },
   ];

   return (
      <header className="p-6 flex items-center justify-center flex-wrap gap-6 shadow-lg shadow-black/25">
         <Link href={url.protectedFromClient} className="text-gray-300 text-sm hover:opacity-70">
            Protected (client)
         </Link>
         <Link href={url.protectedFromServer} className="text-gray-300 text-sm hover:opacity-70">
            Protected (server)
         </Link>
         {(session ? protectedRoutes : publicRoutes).map((route) => (
            <Link href={route.path} key={route.title} className="text-gray-300 text-sm hover:opacity-70">
               {route.title}
            </Link>
         ))}
      </header>
   );
}
