import db from "@/lib/db";

export async function GET() {
  return new Promise((resolve) => {
    const query = "SELECT * FROM users";
    db.query(query, (err, data) => {
      if (err) {
        console.error(err.message);
        resolve(
          new Response(JSON.stringify({ message: "Internal server error" }), {
            status: 500,
          })
        );
      } else {
        resolve(new Response(JSON.stringify({ data }), { status: 200 }));
      }
    });
  });
}

export async function POST(req) {
  const { name, message } = await req.json();
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
