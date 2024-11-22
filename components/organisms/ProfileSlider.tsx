'use client';
import clsx from 'clsx';
import React, { useState } from 'react';
import Icon from '../atoms/Icon';

const profiles = [
  {
    name: 'Abhishek Gupta',
    role: '마케팅',
    experience: '2y+',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    country: '🇨🇴',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
  {
    name: 'Jane Doe',
    role: '디자인',
    experience: '3y+',
    image: 'https://via.placeholder.com/150',
    country: '🇺🇸',
    skills: ['UI 디자인', 'UX 리서치', '프로토타이핑', '디자인 시스템 관리'],
  },
  {
    name: 'John Smith',
    role: '개발',
    experience: '4y+',
    image: 'https://via.placeholder.com/150',
    country: '🇮🇳',
    skills: ['React 개발', '백엔드 개발', 'API 설계', '테스트 작성'],
  },
];

const ProfileSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? profiles.length - 1 : prevIndex - 1));
  }, []);

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === profiles.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const renderSliderItem = (profile: (typeof profiles)[0], index: React.Key) => {
    const isActive = index === currentIndex;
    const isPrev = index === (currentIndex - 1 + profiles.length) % profiles.length;
    const isNext = index === (currentIndex + 1) % profiles.length;

    let translateClass = 'translate-x-0 scale-100 opacity-100 z-10';
    if (isPrev) translateClass = '-translate-x-[30%] scale-90 opacity-50 z-0';
    if (isNext) translateClass = 'translate-x-[30%] scale-90 opacity-50 z-0';

    return (
      <div
        key={index}
        className={clsx(
          'absolute w-[300px] h-[400px] transition-transform duration-500 flex flex-col items-center justify-between bg-white shadow-lg rounded-xl px-6 py-8 mx-2',
          translateClass,
        )}
        style={{
          transition: 'transform 0.5s, opacity 0.5s, scale 0.5s',
        }}>
        <div>
          <img src={profile.image} alt={profile.name} className="w-[120px] h-[120px] rounded-full mb-4" />
          {/* <div className="text-2xl mt-2">{profile.country}</div> */}
        </div>
        <div className="text-center">
          <h2 className="text-xl font-black text-primaryText">{profile.name}</h2>
          <p className="text-blue-600 font-medium mt-1">
            {profile.role} • <strong>{profile.experience}</strong>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-1 mt-4">
          {profile.skills.map(
            (
              skill:
                | string
                | number
                | bigint
                | boolean
                | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | Promise<React.AwaitedReactNode>
                | null
                | undefined,
              idx: React.Key | null | undefined,
            ) => (
              <span key={idx} className="text-secondaryText px-3 py-1 rounded-lg border">
                {skill}
              </span>
            ),
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full mx-auto">
      <button onClick={handlePrev} className="absolute left-4 top-0 bottom-0 my-auto text-3xl text-white z-10">
        <Icon name="caret-left" />
      </button>
      <div className="flex justify-center items-center overflow-hidden w-full">{profiles.map(renderSliderItem)}</div>
      <button onClick={handleNext} className="absolute right-4 top-0 bottom-0 my-auto text-3xl text-white z-10">
        <Icon name="caret-right" />
      </button>
    </div>
  );
};

export default ProfileSlider;
