import { NextResponse } from "next/server";

export async function GET(){

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return NextResponse.json({
    todo:[
        {title:"todo1" , 
         dist:"eat"   
        },
        {title:"todo2" , 
         dist:"sleep"   
        },
        {title:"todo3" , 
         dist:"code"   
        }
        ]
    })
}
