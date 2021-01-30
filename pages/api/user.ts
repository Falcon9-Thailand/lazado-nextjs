import mongoConnection from "src/MongoDB/mongo.config";
import { Request as Req, Response as Res } from "express";
import UserModel, { iUser } from "src/MongoDB/models/userModel";
const bcrypt = require("bcrypt");
export interface iRes {
  success?: boolean;
  message?: string;
  data?: any;
}

// DB connection
mongoConnection();

export default async ({ body, method }: Req, res: Res) => {
  switch (method) {
    case "GET":
      try {
        let user = await UserModel.find({});
        res.status(200).json(<iRes>{ success: true, data: user });
      } catch (error) {
        res.status(400).json(<iRes>{ success: false, message: error.message });
      }
      break;
    case "POST":
      try {
        let {
          name,
          username,
          password,
          email,
          phoneNumber,
          photoURL,
          verified,
        }: iUser = body;

        let saltRounds: number = 10;
        let hashPassword = bcrypt.hashSync(password, saltRounds);
        await UserModel.create({
          name,
          username,
          password: hashPassword,
          email,
          photoURL,
          phoneNumber,
          verified,
        })
          .then((user) => {
            res.status(200).json(<iRes>{ success: true, data: user });
          })
          .catch((error) => {
            res
              .status(400)
              .json(<iRes>{ success: false, message: error.message });
          });
      } catch (error) {
        res.status(400).json(<iRes>{ success: false, message: error.message });
      }
      break;
    default:
      res.status(400).json(<iRes>{ success: false });
  }
};
