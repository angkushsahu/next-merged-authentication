export interface ProfileDetailsProps {
   user: {
      name?: string | null | undefined;
      role?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
      provider?: string | null | undefined;
   };
}
