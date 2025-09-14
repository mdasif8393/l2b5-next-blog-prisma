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
      posts: true,
    },
    // include: {
    //   posts: true,
    // },
    orderBy: {
      createdAt: "desc",
    },
  });

  return result;
};

const getSingleUser = async (id: number) => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
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
      posts: true,
    },
  });
  return result;
};

export const UserService = {
  createUSer,
  getAllFromDB,
  getSingleUser,
};
