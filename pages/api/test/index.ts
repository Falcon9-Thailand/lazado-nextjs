import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { username, password },
  } = req;
  res.json({ user: { username, password } });
  res.status(200);
};
