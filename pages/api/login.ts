import { NextApiRequest, NextApiResponse } from "next";
import IUserCredentials from "../../interfaces/IUserCredentials";
import { login } from "../../lib/server/authentication";

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  if (req.method !== "POST") res.status(500).end();
  const userCredentials: IUserCredentials = req.body;
  try {
    const token = await login(userCredentials);

    res.status(200).json(token);
  } catch (error) {
    res.status(500).json("" + error);
  }
}
