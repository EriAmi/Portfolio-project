import IUserCredentials from "../../interfaces/IUserCredentials";
import { prisma } from "../prisma";

export async function createUser(userCredentials: IUserCredentials) {
  try {
    await prisma.user.create({
      data: {
        name: userCredentials.name ?? "",
        email: userCredentials.email,
        password: userCredentials.password ?? "",
      },
    });
  } catch (error) {}
}

export const getProjects = async () => {
  const projects = await prisma.project.findMany();
  return projects;
};
