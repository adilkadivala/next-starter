import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  return new Promise((resolve) => {
    const query = "SELECT * FROM users";
    db.query(query, (err, data) => {
      if (err) {
        console.error(err.message);
        reject(
          new Response(JSON.stringify({ message: "Internal server error" }), {
            status: 500,
          })
        );
      } else {
        // ({data}) :: this will be add in an object as a key
        // (data) :: this will simple
        resolve(new Response(JSON.stringify({ data }), { status: 200 }));
      }
    });
  });
}

export async function POST(req) {
  const { name, message } = await req.json();
  console.log(req);
  return new Promise((resolve) => {
    const query = "INSERT INTO users (name, message) VALUES (?, ?)";
    db.query(query, [name, message], (err) => {
      if (err) {
        console.error(err.message);
        resolve(
          new Response(JSON.stringify({ message: "Internal server error" }), {
            status: 500,
          })
        );
      } else {
        resolve(
          new Response(
            JSON.stringify({ message: "Data inserted successfully" }),
            { status: 201 }
          )
        );
      }
    });
  });
}
