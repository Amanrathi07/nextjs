import { NextRequest, NextResponse } from "next/server";

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



