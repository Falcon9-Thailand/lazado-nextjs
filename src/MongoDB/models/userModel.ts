import { model, Schema, Document } from "mongoose";

export interface iUser extends Document {
  name: string;
  username: string;
  password: string;
  email: string;
  photoURL?: string;
  phoneNumber?: string;
  verified: boolean;
}

const photoURL: string =
  "https://firebasestorage.googleapis.com/v0/b/rn-wicket.appspot.com/o/user%2Fprofile.png?alt=media&token=f3c61b05-c884-48db-bbd0-8dfe3b1dd127";

const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    photoURL: { type: String, default: photoURL },
    phoneNumber: { type: String, default: "-" },
    verified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default model<iUser>("User", userSchema);
