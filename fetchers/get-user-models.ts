"use server"
import {auth} from '@/auth'
import { prisma } from "@/lib/prisma";

export default async function GetUserModels(){
    const session = await auth();
    if(!session){
        return null;
    }
    const user = session.user;
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