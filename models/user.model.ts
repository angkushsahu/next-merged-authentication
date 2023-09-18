import { model, models, Schema } from "mongoose";

export const UserSchema = new Schema(
   {
      name: { type: String, required: [true, "Please enter your name"] },
      email: { type: String, required: [true, "Please enter your email"], unique: [true, "E-mail already exists"] },
      password: { type: String },
      image: { type: String },
      role: { type: String, enum: ["user", "admin"], default: "user" },
      provider: { type: String, default: "credentials" },
   },
   { timestamps: true }
);

const transformOptions = {
   transform: function (document: any, returnUser: any, options: any) {
      delete returnUser.password;
      delete returnUser.resetPassword;
      return returnUser;
   },
};
UserSchema.set("toObject", transformOptions);
UserSchema.set("toJSON", transformOptions);

const User = models.user || model("user", UserSchema);
export default User;
