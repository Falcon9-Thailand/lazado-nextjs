import mongoConnection from "src/MongoDB/mongo.config";
import { Request as Req, Response as Res } from "express";

import UserModel, { IUser } from "src/MongoDB/models/userModel";

mongoConnection();

export default async (req: Req, res: Res) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const user = await UserModel.find({});
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const user = await UserModel.create(body);

        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};
