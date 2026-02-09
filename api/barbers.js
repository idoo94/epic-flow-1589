export const runtime = "edge";

const mockBarbers = [
  { id: 'amos', name: 'Amos', specialty: 'Fades, Modern Styles', bio: 'Founder and master barber with 15+ years experience.', avatar: 'https://images.pexels.com/photos/18503633/pexels-photo-18503633.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'dave', name: 'Dave', specialty: 'Classic Cuts, Beard Artistry', bio: 'Expert in traditional barbering and beard sculpting.', avatar: 'https://images.pexels.com/photos/4625632/pexels-photo-4625632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'lisa', name: 'Lisa', specialty: 'Long Hair, Textured Cuts', bio: 'Specializing in longer styles and creative textures.', avatar: 'https://images.pexels.com/photos/4663136/pexels-photo-4663136.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Simulate database interaction delay
    await new Promise(resolve => setTimeout(resolve, 300));

    return new Response(JSON.stringify(mockBarbers), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}