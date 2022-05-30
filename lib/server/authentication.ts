import IUserCredentials from "../../interfaces/IUserCredentials";
import bcrypt from "bcrypt";
import { createUser } from "./callDatabase";
import Joi, { string } from "joi";
import { prisma } from "../prisma";
import jwt from "jsonwebtoken";

export async function register(userCredentials: IUserCredentials) {
  const validationResult = validateCredentials(userCredentials);
  if (validationResult.error) throw validationResult.error.message;

  const salt = await bcrypt.genSalt();
  const encryptedPassword = await bcrypt.hash(userCredentials.password, salt);
  await createUser({
    name: userCredentials.name,
    password: encryptedPassword,
    email: userCredentials.email,
  });
}

function validateCredentials(userCredentials: IUserCredentials) {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(20),
    password: Joi.string().required().min(5),
    email: Joi.string().email().required(),
  });

  return schema.validate(userCredentials);
}

export async function login(userCredentials: IUserCredentials): Promise<string> {
  const user = await prisma.user.findFirst({
    where: {
      email: userCredentials.email,
    },
  });
  if (!user) throw "No user with email";

  const passwordCheck = await bcrypt.compare(userCredentials.password, user.password);
  if (!passwordCheck) throw "Incorrect password ";
  const token = await jwt.sign({ id: user.id }, process.env.SECRET as string);
  return token;
}
