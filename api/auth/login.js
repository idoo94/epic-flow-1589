export const runtime = "edge";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { email, password } = await req.json();

  // Simulate user authentication
  if (email === 'admin@amoscut.com' && password === 'adminpass') {
    return new Response(JSON.stringify({
      message: 'Login successful!',
      token: 'mock-jwt-admin-token',
      user: { id: 'admin123', email: 'admin@amoscut.com', role: 'admin' }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else if (email === 'user@amoscut.com' && password === 'userpass') {
    return new Response(JSON.stringify({
      message: 'Login successful!',
      token: 'mock-jwt-user-token',
      user: { id: 'user123', email: 'user@amoscut.com', role: 'customer' }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}