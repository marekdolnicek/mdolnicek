import { readFile } from 'fs/promises';

export async function GET() {
  const pdfUrl = new URL('../assets/docs/CV_cs-2026.pdf', import.meta.url);
  const bytes = await readFile(pdfUrl);

  return new Response(bytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="marek_dolnicek_cv-cs.pdf"'
    }
  });
}
