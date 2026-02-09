export const runtime = "edge";

const mockServices = [
  { id: 'cut', name: 'Signature Haircut', price: 45, time: 60, description: 'A precision cut tailored to your style.' },
  { id: 'fade', name: 'Fade / Skin Fade', price: 50, time: 60, description: 'Sharp, clean fade from zero to your desired length.' },
  { id: 'beard', name: 'Beard Trim & Shape', price: 30, time: 40, description: 'Expert shaping, trimming, and grooming for a perfectly sculpted beard.' },
  { id: 'combo', name: 'Haircut + Beard Combo', price: 70, time: 90, description: 'The ultimate grooming package.' },
  { id: 'kids', name: 'Kids Cut (Under 12)', price: 30, time: 40, description: 'A stylish and comfortable haircut experience for our younger clients.' },
];

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Simulate database interaction delay
    await new Promise(resolve => setTimeout(resolve, 300));

    return new Response(JSON.stringify(mockServices), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else if (req.method === 'POST') {
    // Simulate adding a new service (admin only in real app)
    const newService = await req.json();
    if (!newService.name || !newService.price) {
      return new Response(JSON.stringify({ message: 'Service name and price are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const addedService = { ...newService, id: `svc-${Date.now()}` };
    mockServices.push(addedService); // Not persistent in real serverless, but for mock purposes
    return new Response(JSON.stringify({ message: 'Service added successfully', service: addedService }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}