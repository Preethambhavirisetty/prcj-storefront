const delay = (ms = 400) => new Promise((r) => setTimeout(r, ms));

export async function submitContact(data) {
  await delay();
  // Mock: log to console. Replace with client.post('/api/v1/leads/contact', data)
  console.log('[PRCJ] Contact form submission:', data);
  return { success: true, message: "We'll be in touch within 24 hours." };
}

export async function submitAppointment(data) {
  await delay();
  // Mock: log to console. Replace with client.post('/api/v1/leads/appointment', data)
  console.log('[PRCJ] Appointment request:', data);
  return { success: true, message: 'Appointment request received. We will confirm shortly.' };
}
