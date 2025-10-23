import { PrismaClient } from "../generated/prisma/client";

function prismaClientSingleton (){
    return new PrismaClient
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

if(process.env.NODE_ENV !== "production" ) globalThis.prisma = prisma

export default prisma ;
