import { ProfileDetailsProps } from "./types";
import UpdateForm from "./updateForm";

export default function UpdateProfile({ user }: ProfileDetailsProps) {
   return (
      <section>
         <h2 className="text-2xl">Update Profile</h2>
         <UpdateForm user={user} />
      </section>
   );
}
