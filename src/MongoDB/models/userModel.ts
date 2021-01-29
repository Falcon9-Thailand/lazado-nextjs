import { model, Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  username: string;
  password: string;
  email: string;
  photoURL?: string;
  phoneNumber?: string;
  verified: boolean;
}

const userSchema: Schema = new Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  photoURL: String,
  phoneNumber: String,
  verified: Boolean,
});

export default model<IUser>("user", userSchema);
