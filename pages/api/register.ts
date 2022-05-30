import { NextApiRequest, NextApiResponse } from "next";
import IUserCredentials from "../../interfaces/IUserCredentials";
import { register } from "../../lib/server/authentication";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") res.status(500).end();
  const userCredentials: IUserCredentials = req.body;
  try {
    await register(userCredentials);

    res.status(200).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
