import Link from "next/link";

export default function Home() {
   return (
      <div className="min-h-page flex flex-col items-center justify-center">
         <h1>Welcome to home page</h1>
         <div className="mt-4 text-indigo-500 flex flex-col">
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
         </div>
      </div>
   );
}
