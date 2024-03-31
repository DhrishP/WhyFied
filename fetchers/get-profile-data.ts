
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export default async function GetProfileData(){
    const session = await auth(
    )
    if (!session?.user) {
        return null;
    }
    const res = await prisma.user.findFirst({
        where: {
            id: session.user.id,
        },
    })
    if(!res){
        return null;
    }
   
    return [res.coins,res.Streak,res.promptTokes]
}