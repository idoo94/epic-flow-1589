export const runtime = "edge";

// In a real application, this would interact with a database
const mockAppointments = [
  { id: 'app1', serviceId: 'cut', barberId: 'amos', date: '2024-08-01', time: '10:00 AM', name: 'John Doe', email: 'john@example.com', status: 'confirmed' },
  { id: 'app2', serviceId: 'fade', barberId: 'dave', date: '2024-08-01', time: '11:00 AM', name: 'Jane Smith', email: 'jane@example.com', status: 'confirmed' },
];

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Simulate fetching appointments
    await new Promise(resolve => setTimeout(resolve, 300));
    return new Response(JSON.stringify(mockAppointments), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else if (req.method === 'POST') {
    const { serviceId, barberId, date, time, name, email, phone } = await req.json();

    if (!serviceId || !barberId || !date || !time || !name || !email) {
      return new Response(JSON.stringify({ message: 'Missing required fields.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Simulate double booking check (basic)
    const isDoubleBooked = mockAppointments.some(
      (app) => app.barberId === barberId && app.date === date && app.time === time && app.status === 'confirmed'
    );
    if (isDoubleBooked) {
      return new Response(JSON.stringify({ message: 'This slot is already booked. Please choose another time.' }), {
        status: 409, // Conflict
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Simulate creating a new appointment
    const newAppointment = {
      id: `app-${Date.now()}`,
      serviceId,
      barberId,
      date,
      time,
      name,
      email,
      phone,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };
    mockAppointments.push(newAppointment); // Not persistent in real serverless, but for mock purposes

    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate DB write

    return new Response(JSON.stringify({
      message: 'Appointment booked successfully!',
      bookingId: newAppointment.id,
      appointment: newAppointment,
    }), {
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