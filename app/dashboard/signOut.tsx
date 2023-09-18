"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {
   return (
      <button type="button" className="mt-4 py-2 px-6 bg-indigo-600 hover:bg-indigo-500" onClick={() => signOut()}>
         Sign out
      </button>
   );
}
