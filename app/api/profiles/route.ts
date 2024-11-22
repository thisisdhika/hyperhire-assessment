import { Profile } from '@/types';
import { NextResponse } from 'next/server';

export async function GET() {
  const data: Profile[] = [
    {
      name: 'Abhishek Gupta',
      role: '마케팅',
      experience: '2y+',
      image: 'https://i.pravatar.cc/300',
      country: 'US',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
    {
      name: 'Jane Doe',
      role: '디자인',
      experience: '3y+',
      image: 'https://i.pravatar.cc/300',
      country: 'US',
      skills: ['UI 디자인', 'UX 리서치', '프로토타이핑', '디자인 시스템 관리'],
    },
    {
      name: 'John Smith',
      role: '개발',
      experience: '4y+',
      image: 'https://i.pravatar.cc/300',
      country: 'US',
      skills: ['React 개발', '백엔드 개발', 'API 설계', '테스트 작성'],
    },
  ];

  return NextResponse.json(data);
}
