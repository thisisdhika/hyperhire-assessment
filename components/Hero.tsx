'use client';

import * as React from 'react';
import clsx from 'clsx';
import type { Service } from '@/types';
import Icon, { type Icons } from '@/components/atoms/Icon';
import ProfileSlider, { ProfileSliderProps } from '@/components/organisms/ProfileSlider';

type HeroProps = {
  profiles: ProfileSliderProps['data'];
  services: Service[];
};

const Hero: React.FC<HeroProps> = ({ profiles, services }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isPageLoaded, setIsPageLoaded] = React.useState(false);
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

  React.useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  return (
    <section className="bg-gradient-to-b from-primaryBackground to-primaryBackground2 text-white pb-10 md:pb-20 pt-40 md:pt-52">
      <div ref={containerRef} className="container mb-8 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="relative w-full">
              <div
                className={clsx(
                  'absolute bottom-[105%] left-0 mb-2 bg-[#8BC4FF] text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-lg',
                  'transition-all delay-1000 duration-500 ease-in-out',
                  isPageLoaded ? 'opacity-100' : 'opacity-0',
                )}>
                풀타임, 파트타임
                <div className="absolute top-full left-6 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#8BC4FF]"></div>
              </div>
              <h1
                className={clsx(
                  'text-3xl md:text-5xl font-bold leading-snug',
                  'transition-all duration-500 ease-in-out',
                  isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
                )}>
                최고의 실력을 가진 <br />
                외국인 인재를 찾고 계신가요?
              </h1>
              <p
                className={clsx(
                  'mt-6 text-xl',
                  'transition-all delay-500 duration-500 ease-in-out',
                  isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
                )}>
                법률 및 인사관리 부담없이 <br />
                1주일 이내에 원격으로 채용해보세요.
              </p>
              <a
                href="#"
                className={clsx(
                  'block mt-6 underline font-medium text-lg',
                  'transition-all delay-500 duration-500 ease-in-out',
                  isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
                )}>
                개발자가 필요하신가요?
              </a>
            </div>

            <div
              className={clsx(
                'w-full mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-8',
                'transition-all delay-[1500ms] duration-500 ease-in-out',
                isPageLoaded ? 'opacity-100' : 'opacity-0',
              )}>
              <div>
                <hr className="hidden md:block md:max-w-[85%]" />
                <p className="mt-2 text-xl font-bold">평균 월 120만원</p>
                <p className="mt-2">임금을 해당 국가별 기준으로 계산합니다.</p>
              </div>
              <div>
                <hr className="md:max-w-[85%]" />
                <p className="mt-2 text-xl font-bold">최대 3회 인력교체</p>
                <p className="mt-2">막상 채용해보니 맞지 않아도 걱정하지 마세요.</p>
              </div>
              <div>
                <hr className="md:max-w-[85%]" />
                <p className="mt-2 text-xl font-bold">평균 3일, 최대 10일</p>
                <p className="mt-2">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</p>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              'relative min-h-[440px] md:min-h-[unset] -mx-4 md:mx-0 mt-16 md:mt-0',
              'transition-all delay-[1500ms] duration-500 ease-in-out',
              isPageLoaded ? 'opacity-100' : 'opacity-0',
            )}>
            <div className="absolute -top-[45px] md:-top-[80px] left-1/2 transform -translate-x-1/2 mb-2 bg-[#E9F7EF] text-[#00C696] text-sm font-semibold px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center gap-1">
                <span className="p-1.5 bg-[#BBF3D2] rounded-full">
                  <Icon size={18} name="dollar-sign" />
                </span>
                풀타임, 파트타임
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#E9F7EF]"></div>
            </div>
            <ProfileSlider data={profiles} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start gap-4 overflow-x-auto py-4 scrollbar-hide">
        <div style={{ width: `${scrollableLeftGap - 16}px` }} className={clsx('shrink-0')} />
        {services.map((card, index) => (
          <div
            key={card.id}
            style={{
              transitionDelay: `${1500 + 150 * index}ms`,
            }}
            className={clsx(
              'flex items-center p-4 gap-4 rounded-lg bg-white bg-opacity-20 w-[280px] shrink-0',
              'transition-all duration-500 ease-in-out',
              isPageLoaded ? 'opacity-100' : 'opacity-0',
            )}>
            <span className="p-2 bg-white bg-opacity-40 rounded-lg">
              <Icon size={28} name={card.icon as Icons} />
            </span>
            <span className="text-xl font-semibold">{card.text}</span>
          </div>
        ))}
        <div style={{ width: `${scrollableLeftGap - 16}px` }} className={clsx('shrink-0')} />
      </div>
    </section>
  );
};

export default Hero;
