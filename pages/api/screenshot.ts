import { NextApiRequest, NextApiResponse } from "next";
import { takeScreenshot } from "../../lib/server/puppeteer";

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  if (req.method !== "POST") res.status(500).end();

  const { url } = req.body;

  try {
    const screenshot = await takeScreenshot(url);

    res.status(200).json(screenshot);
  } catch (error) {
    console.log(error);

    res.status(500).end();
  }
}
