import { Service } from '@/types';
import { NextResponse } from 'next/server';

export async function GET() {
  const data: Service[] = [
    { id: 1, icon: 'marketing', text: '해외 마케팅' },
    { id: 2, icon: 'image', text: '퍼블리셔' },
    { id: 3, icon: 'box', text: '캐드원(제조사)' },
    { id: 4, icon: 'target', text: '해외 세일즈' },
    { id: 5, icon: 'call', text: '해외 CS' },
  ];

  return NextResponse.json(data);
}
