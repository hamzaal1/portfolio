import db from "@/db/connection";
import { NextResponse } from "next/server";


export async function GET() {
    // const user = await db.user.create({
    //     data:{
    //         email:"hamzademnati21@gmail.com",
    //         name:"Hamza Demnani"
    //     }
    // });

    const users = await db.user.findMany();
    const data = {
        describe: "this's my rest api from next js"
    }
    return NextResponse.json({ message: "Hello",users,data });
}

// ---------------Before Prisma-----------------------

// import { MongoClient } from 'mongodb';
// import { NextResponse } from 'next/server';

// export async function GET() {
//     const client = new MongoClient(process.env.MONGODB_URI);
//     await client.connect();
//     const db = client.db('sample_airbnb');
//     // const result = await db.collection('listingsAndReviews').find({}).limit(3).toArray();
//     const data = {
//         describe:"this's my rest api from next js"
//     }
//     return NextResponse.json({ message: "test", data });
// }
