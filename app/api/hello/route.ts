import { NextResponse } from 'next/server';

interface HelloResponse {
  message: string;
}

export async function GET() {
  const response: HelloResponse = { message: 'Hello, world!' };
  return NextResponse.json(response);
}
