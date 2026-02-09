export const runtime = "edge";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return new Response(JSON.stringify({ message: 'All fields are required.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // In a real application, you would send this email using a service like SendGrid, Mailgun, or Nodemailer.
  // For this mock, we just log it and simulate a successful response.

  console.log('Received contact form submission:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);

  await new Promise(resolve => setTimeout(resolve, 700)); // Simulate email sending delay

  return new Response(JSON.stringify({ message: 'Your message has been sent successfully!' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}