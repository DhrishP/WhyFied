"use server"
import { currentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function GetUserModels(){
    const user = await currentUser();
    if(!user){
        return null;
    }
    console.log(user)
    const res = await prisma.userModels.findMany({
        where:{
            userId: user.id
        },
        include:{
            model:true
        }
    })
    console.log(res);
    return res.map(item => item.model);
}