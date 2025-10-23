import { NextRequest, NextResponse } from "next/server";

import prisma from "@/app/lib/db";

export async function GET(req: NextRequest) {
  return NextResponse.json({ name: "aman" });
}

// export async function POST(req: NextRequest) {
//   const data = await req.json();

//   console.log("Body:", data);

//   return NextResponse.json({ message: "successful" });
// }


// export async function POST(req:NextRequest){
    
//     const allHeaders = req.headers
//     console.log(allHeaders)

//     return NextResponse.json({ message: "checked headers" })
// }



// export async function POST(req:NextResponse){

//     const cookie = cookies();
//     //@ts-expect-error
//     cookie.set("aman","my cookie");

//     return NextResponse.json({message:"cookie set"})
// }

// export async function GET(req:NextRequest) {
    
//     const usercookie = req.cookies.get("aman");

//     console.log("cookie :",usercookie?.value);

    

//     return NextResponse.json({message:"i get the cookie"})
// }


const client = new prisma.PrismaClient();

export async function POST(req:NextRequest){
    const data = await req.json();
   
  console.log(data)
    const user = await client.user.create({
      data:{
        email:data.email ,
        password:data.password
      }
    })
    

    return NextResponse.json({ message: "User created", userId: user.id });
  }