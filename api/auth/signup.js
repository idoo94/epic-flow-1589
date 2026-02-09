export const runtime = "edge";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, email, password } = await req.json();

  // In a real application, you would:
  // 1. Hash the password.
  // 2. Store the user in a database (e.g., MongoDB, PostgreSQL).
  // 3. Handle duplicate email checks.
  // For this mock, we just simulate success.

  if (!name || !email || !password) {
    return new Response(JSON.stringify({ message: 'Name, email, and password are required.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Simulate database interaction delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Simulate successful user creation
  return new Response(JSON.stringify({
    message: 'User registered successfully!',
    userId: 'new-user-id-' + Math.random().toString(36).substr(2, 9),
    email
  }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}