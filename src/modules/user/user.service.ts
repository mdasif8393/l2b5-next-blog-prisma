import { prisma } from "../../config/db";

const createUSer = async (payload: any) => {
  const createdUser = prisma.user.create({
    data: payload,
  });
  return createdUser;
};

export const UserService = {
  createUSer,
};
