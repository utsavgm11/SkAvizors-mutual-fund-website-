export async function POST(request) {
  const sheetUrl = 'https://script.google.com/macros/s/AKfycbypGpuXblpQ-UaBDolLPGjxc2nE2_Xz1t6SmXQIHnQmN5h3V9o466r1HnSkmNpq29I/exec';

  const body = await request.text();

  const response = await fetch(sheetUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  if (!response.ok) {
    return new Response(JSON.stringify({ error: 'Failed to save data' }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
