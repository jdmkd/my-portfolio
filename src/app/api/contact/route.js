import { initAllTables } from '@/db/createTables';
import { createContact } from '@/db/models/contact';

export async function POST(req) {
  await initAllTables();

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return Response.json({ error: 'All fields required' }, { status: 400 });
  }

  await createContact({ name, email, message });
  return Response.json({ success: true });
}
