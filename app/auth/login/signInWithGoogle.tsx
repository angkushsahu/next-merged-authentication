"use client";

import { signIn } from "next-auth/react";
import { ICallback } from "./types";

export default function SignInWithGoogle({ callbackUrl = "/" }: ICallback) {
   function googleSignin() {
      signIn("google", { callbackUrl });
   }

   return (
      <button
         type="button"
         onClick={googleSignin}
         className="mt-4 flex w-full justify-center rounded-md border-2 border-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
         Sign in with google
      </button>
   );
}
