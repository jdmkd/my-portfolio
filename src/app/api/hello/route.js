// app/api/users/route.js

export async function GET(request) {
  return Response.json({ message: "/api/hello Hello page" });
}

export async function POST(request) {
  const body = await request.json();
  return Response.json({ user: body });
}
