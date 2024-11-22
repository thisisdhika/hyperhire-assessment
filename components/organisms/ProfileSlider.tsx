'use client';
import * as React from 'react';
import clsx from 'clsx';
import type { Profile } from '@/types';
import Icon from '@/components/atoms/Icon';
import * as Flags from 'country-flag-icons/react/3x2';

export type ProfileSliderProps = {
  data: Profile[];
};

const ProfileSlider: React.FC<ProfileSliderProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  }, []);

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const renderSliderItem = (profile: (typeof data)[0], index: React.Key) => {
    const Flag = Flags[profile.country];
    // const isActive = index === currentIndex;
    const isPrev = index === (currentIndex - 1 + data.length) % data.length;
    const isNext = index === (currentIndex + 1) % data.length;

    let translateClass = 'translate-x-0 scale-100 opacity-100 z-10';
    if (isPrev) translateClass = '-translate-x-[15%] md:-translate-x-[30%] scale-90 opacity-50 z-0';
    if (isNext) translateClass = 'translate-x-[15%] md:translate-x-[30%] scale-90 opacity-50 z-0';

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
        <div className="relative">
          <img src={profile.image} alt={profile.name} className="w-[120px] h-[120px] rounded-full" />
          <Flag width={25} className="absolute bottom-1 right-2" />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-black text-primaryText">{profile.name}</h2>
          <p className="text-blue-600 font-medium mt-1">
            {profile.role} • <strong>{profile.experience}</strong>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-1 mt-4">
          {profile.skills.map((skill: (typeof data)[0]['skills'][0], idx: React.Key | null | undefined) => (
            <span key={idx} className="text-secondaryText px-3 py-1 rounded-lg border">
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full mx-auto">
      <button onClick={handlePrev} className="absolute left-4 top-0 bottom-0 my-auto text-3xl text-white z-10">
        <Icon name="caret-left" />
      </button>
      <div className="flex justify-center items-center overflow-hidden w-full">{data.map(renderSliderItem)}</div>
      <button onClick={handleNext} className="absolute right-4 top-0 bottom-0 my-auto text-3xl text-white z-10">
        <Icon name="caret-right" />
      </button>
    </div>
  );
};

export default ProfileSlider;
