import { User } from "@prisma/client";

const isAdmin = (user: User): boolean => {
    return user?.email! === "akashnalawade8262@gmail.com";
};

export default isAdmin;