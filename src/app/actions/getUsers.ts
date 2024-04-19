import { db } from "@/lib/db";

const getUsers = async () => {
    try {
        const users = await db.user.findMany({
            where: {
                NOT: {
                    email: "akashnalawade8262@gmail.com",
                },
            }
        });

        return users;
    } catch (error) {
        console.log("There was a problem!", error);
        return [];
    }
};

export default getUsers;
