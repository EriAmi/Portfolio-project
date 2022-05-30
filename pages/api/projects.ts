import { NextApiRequest, NextApiResponse } from "next";
import IProject from "../../interfaces/IProject";
import { getProjects } from "../../lib/server/callDatabase";

export default async function handler(req: NextApiRequest, res: NextApiResponse<IProject[]>) {
  if (req.method !== "GET") res.status(500).end();
  try {
    const projects = await getProjects();

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).end();
  }
}
