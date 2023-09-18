"use client";

import { ProfileDetailsProps } from "./types";

export default function UpdateForm({ user }: ProfileDetailsProps) {
   async function formAction(formValues: FormData) {
      const name = formValues.get("name");
      const email = formValues.get("email");
      console.log(name, email);
   }

   return (
      <form action={formAction} className="max-w-lg">
         <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6">
               Name
            </label>
            <div className="mt-2">
               <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               />
            </div>
         </div>

         <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6">
               Email address
            </label>
            <div className="mt-2">
               <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               />
            </div>
         </div>
         <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
         >
            Update
         </button>
      </form>
   );
}
