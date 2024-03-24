"use server"
import { currentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function GetUserModels(){
    const user = await currentUser();
    if(!user){
        return null;
    }
    const res = await prisma.userModels.findMany({
        where:{
            userId: user.id
        },
        include:{
            model:true
        }
    })
    return res.map(item => item.model);
}