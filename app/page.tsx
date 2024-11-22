'use client';

import * as React from 'react';
import clsx from 'clsx';
import Icon, { type Icons } from '@/components/atoms/Icon';
import ProfileSlider from '@/components/organisms/ProfileSlider';

const HomePage = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scrollableLeftGap, setScrollableLeftGap] = React.useState(0);

  React.useLayoutEffect(() => {
    const handleResize = () => {
      if (containerRef.current && containerRef.current.firstElementChild) {
        const { left } = containerRef.current.firstElementChild.getBoundingClientRect();

        setScrollableLeftGap(left);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="bg-gradient-to-b from-primaryBackground to-primaryBackground2 text-white pb-20 pt-52">
      <div ref={containerRef} className="container mb-20">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <header className="relative w-full">
              <div className="absolute bottom-[105%] left-0 mb-2 bg-white text-[#40E2E8] text-sm font-semibold px-4 py-2 rounded-lg shadow-lg">
                풀타임, 파트타임
                <div className="absolute top-full left-6 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-snug">
                최고의 실력을 가진 <br />
                외국인 인재를 찾고 계신가요?
              </h1>
              <p className="mt-6 text-xl">
                법률 및 인사관리 부담없이 <br />
                1주일 이내에 원격으로 채용해보세요.
              </p>
              <a href="#" className="block mt-6 underline font-medium text-lg">
                개발자가 필요하신가요?
              </a>
            </header>

            <section className="w-full mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <hr className="max-w-[85%]" />
                <p className="mt-2 text-xl font-bold">평균 월 120만원</p>
                <p className="mt-2">임금을 해당 국가별 기준으로 계산합니다.</p>
              </div>
              <div>
                <hr className="max-w-[85%]" />
                <p className="mt-2 text-xl font-bold">최대 3회 인력교체</p>
                <p className="mt-2">막상 채용해보니 맞지 않아도 걱정하지 마세요.</p>
              </div>
              <div>
                <hr className="max-w-[85%]" />
                <p className="mt-2 text-xl font-bold">평균 3일, 최대 10일</p>
                <p className="mt-2">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</p>
              </div>
            </section>
          </div>
          <div className="relative">
            <div className="absolute bottom-[105%] left-1/2 transform -translate-x-1/2 mb-2 bg-[#E9F7EF] text-[#00C696] text-sm font-semibold px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center gap-1">
                <span className="p-1.5 bg-[#BBF3D2] rounded-full">
                  <Icon size={18} name="dollar-sign" />
                </span>
                풀타임, 파트타임
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#E9F7EF]"></div>
            </div>
            <ProfileSlider />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start gap-4 overflow-x-auto py-4 scrollbar-hide">
        <div style={{ width: `${scrollableLeftGap - 16}px` }} className={clsx('shrink-0')} />
        {[
          { id: 1, icon: 'marketing', text: '해외 마케팅' },
          { id: 2, icon: 'image', text: '퍼블리셔' },
          { id: 3, icon: 'box', text: '캐드원(제조사)' },
          { id: 4, icon: 'target', text: '해외 세일즈' },
          { id: 5, icon: 'call', text: '해외 CS' },
          { id: 6, icon: 'marketing', text: '해외 마케팅' },
        ].map((card) => (
          <div
            key={card.id}
            className="flex items-center p-4 gap-4 rounded-lg bg-white bg-opacity-20 w-[280px] shrink-0">
            <span className="p-2 bg-white bg-opacity-40 rounded-lg">
              <Icon size={28} name={card.icon as Icons} />
            </span>
            <span className="text-xl font-semibold">{card.text}</span>
          </div>
        ))}
        <div style={{ width: `${scrollableLeftGap - 16}px` }} className={clsx('shrink-0')} />
      </div>
    </main>
  );
};

export default HomePage;
