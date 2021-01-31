import { app, Realm } from "src/MongoDB/realm.config";
import { Request as Req, Response as Res } from "express";

export default async (req: Req, res: Res) => {
  const { username, password } = req.body;
  const credentials = Realm.Credentials.emailPassword(username, password);
  try {
    // Authenticate the user
    const user: Realm.User = await app.logIn(credentials);
    // `App.currentUser` updates to match the logged in user

    // assert(user.id === app.currentUser.id)
    return user;
  } catch (err) {
    console.error("Failed to log in", err);
  }
};
