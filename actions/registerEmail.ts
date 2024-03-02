"use server"
import {prisma} from "@/lib/prisma"
export default async function registerEmail(email:string){
    const findDuplicate = await prisma?.registeredEmail.findUnique({
        where:{
            email
        }
    })
    if(findDuplicate) return {exist:"Email already registered!"}
    const res = await prisma?.registeredEmail.create({
        data:{
            email
        }
    })

    if(!res) return {error:"Email didn't register successfully!"}
    return {success:"Email registered successfully!"}
}