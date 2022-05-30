import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default async function handler(req: NextApiRequest, res: NextApiResponse<boolean>) {
  if (req.method !== "POST") res.status(200).json(false);
  const { token }: { token: string } = JSON.parse(req.body);
  const secret = process.env.SECRET as string;

  try {
    jwt.verify(token, secret);
    res.status(200).json(true);
  } catch (error) {
    res.status(200).json(false);
  }
}
