// app/api/users/route.js

export async function GET(request: Request) {
  return Response.json({ message: "/api/data data page" });
}

export async function POST(request: Request) {
  const body = await request.json();
  return Response.json({ user: body });
}
