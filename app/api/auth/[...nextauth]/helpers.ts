import type { Account, Profile } from "next-auth";
import User from "@/models/user.model";

export async function signInWithOAuth({ account, profile }: { account: Account; profile: Profile | undefined }) {
   try {
      const userProfile: Profile & { picture: string } = { picture: "", ...profile };
      if (!userProfile || !userProfile.email) return;
      const user = await User.findOne({ email: userProfile.email });
      if (user) return true;

      // if user is not present, then register new account
      if (!userProfile.name) return;
      const newUser = new User({
         name: userProfile.name,
         email: userProfile.email,
         image: userProfile?.picture,
         provider: account?.provider,
      });
      await newUser.save();
      return true;
   } catch (err) {
      throw new Error("Unable to signin using OAuth");
   }
}

export async function getUserByEmail({ email }: { email: string | null | undefined }) {
   try {
      if (!email) return;
      const user = await User.findOne({ email });
      if (!user) throw new Error("E-mail does not exist");
      return { ...user._doc, _id: user.id };
   } catch (err) {
      throw new Error("Unable to signin using OAuth");
   }
}
