import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Missing RESEND_API_KEY' }), { status: 500 });
  }

  try {
    const { company, scope, timeline } = await request.json();

    const html = `
      <div>
        <p><strong>Company / project:</strong> ${company ?? ''}</p>
        <p><strong>Scope:</strong> ${scope ?? ''}</p>
        <p><strong>Timeline:</strong> ${timeline ?? ''}</p>
      </div>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: 'Portfolio Form <brief@mdolnicek.eu>',
        to: ['marekdolnicek@gmail.com'],
        subject: 'Nový brief z webu',
        html
      })
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      return new Response(JSON.stringify({ error: errorText }), { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), { status: 500 });
  }
};
