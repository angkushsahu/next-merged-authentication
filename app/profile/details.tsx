import { ProfileDetailsProps } from "./types";

export default function ProfileDetails({ user }: ProfileDetailsProps) {
   return (
      <section>
         <div>
            Name: <strong>{user?.name}</strong>
         </div>
         <div>
            E-mail: <strong>{user?.email}</strong>
         </div>
         <div>
            Role: <strong>{user?.role}</strong>
         </div>
         <div>
            Provider: <strong>{user?.provider}</strong>
         </div>
         {user?.image ? <img src={user?.image as string} alt="image" /> : null}
      </section>
   );
}
