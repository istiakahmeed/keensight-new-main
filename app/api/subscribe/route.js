import { addEmailToSheet } from '@/utils/googleSheets';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req) {
  const origin = req.headers.get('origin');

  // Check if the request origin is allowed
  if (origin === 'https://www.keensightanalytics.com') {
    try {
      const { email } = await req.json();

      if (!email) {
        return NextResponse.json(
          { error: 'Email is required' },
          { status: 400, headers: { 'Access-Control-Allow-Origin': origin } }
        );
      }

      const result = await addEmailToSheet(email);
      return NextResponse.json(result, {
        status: 200,
        headers: { 'Access-Control-Allow-Origin': origin }
      });
    } catch (error) {
      console.error('Error subscribing:', error);
      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: 500, headers: { 'Access-Control-Allow-Origin': origin } }
      );
    }
  } else {
    return NextResponse.json(
      { error: 'CORS not allowed' },
      { status: 403, headers: { 'Access-Control-Allow-Origin': origin } }
    );
  }
}

// Add OPTIONS method handler to respond to preflight CORS requests
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://www.keensightanalytics.com',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
