import { Prisma, User } from "@prisma/client";
import { prisma } from "../../config/db";

const createUSer = async (payload: Prisma.UserCreateInput): Promise<User> => {
  const createdUser = prisma.user.create({
    data: payload,
  });
  return createdUser;
};

const getAllFromDB = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      picture: true,
      createdAt: true,
      updatedAt: true,
      role: true,
      status: true,
    },
  });

  return result;
};

export const UserService = {
  createUSer,
  getAllFromDB,
};
