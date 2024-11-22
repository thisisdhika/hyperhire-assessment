'use client';

import * as React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Icon from '@/components/atoms/Icon';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const toggleDropdown = React.useCallback(() => setIsDropdownOpen(!isDropdownOpen), [isDropdownOpen]);
  const closeDropdown = React.useCallback(() => setIsDropdownOpen(false), []);

  const toggleMobileMenu = React.useCallback(() => setIsMobileMenuOpen(!isMobileMenuOpen), [isMobileMenuOpen]);

  React.useLayoutEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        'w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-primaryBackground2 shadow-md' : 'bg-transparent',
      )}>
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.svg" alt="Hyperhire" width={115} height={20} />
          </div>

          <nav className="hidden lg:flex space-x-8">
            <div
              className="relative inline-block text-white"
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}>
              <a href="#" className="font-semibold text-white hover:underline cursor-pointer">
                채용 <Icon size={18} name="caret-down" className="inline-block align-sub" />
              </a>

              {isDropdownOpen && (
                <div className="absolute left-0 w-64 bg-white shadow-lg rounded-lg z-10 translate-x-[-40%]">
                  <span className="px-4 pt-3 font-bold block text-primaryText">채용</span>
                  <ul className="py-2 text-primaryText">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">해외 개발자 원격 채용</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">외국인 원격 채용 (비개발 직군)</li>
                    <hr />
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">한국어 가능 외국인 채용</li>
                  </ul>
                </div>
              )}
            </div>
            <a href="#" className="font-semibold text-white hover:underline">
              해외 개발자 활용 서비스
            </a>
          </nav>

          <button
            className={clsx(
              'lg:hidden text-white relative w-8 h-8 flex flex-col justify-center items-center space-y-1 transition-all duration-300',
              isMobileMenuOpen && 'bg-transparent',
            )}
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu">
            <span
              className={clsx(
                'w-6 h-0.5 bg-white transition-all duration-300',
                isMobileMenuOpen && 'rotate-45 translate-y-[1px] absolute',
              )}></span>
            <span
              className={clsx(
                'w-6 h-0.5 bg-white transition-all duration-300',
                isMobileMenuOpen && 'opacity-0',
              )}></span>
            <span
              className={clsx(
                'w-6 h-0.5 bg-white transition-all duration-300',
                isMobileMenuOpen && '-rotate-45 -translate-y-[1px] absolute',
              )}></span>
          </button>

          <button className="hidden lg:block bg-white text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-100">
            문의하기
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-[120%] left-0 right-0 mx-auto w-[90%] bg-secondaryBackground shadow-xl rounded-md z-50">
            <ul className="flex flex-col space-y-4 py-4">
              <li className="px-4">
                <a href="#" className="font-semibold text-primaryText block">
                  채용
                </a>

                <ul className="pl-4 text-secondaryText">
                  <li className="py-2 hover:text-white cursor-pointer">해외 개발자 원격 채용</li>
                  <li className="py-2 hover:text-white cursor-pointer">외국인 원격 채용 (비개발 직군)</li>
                  <li className="py-2 hover:text-white cursor-pointer">한국어 가능 외국인 채용</li>
                </ul>
              </li>
              <li className="px-4">
                <a href="#" className="font-semibold text-primaryText block">
                  해외 개발자 활용 서비스
                </a>
              </li>
              <li className="px-4">
                <button className="w-full bg-primaryBackground2 text-white font-medium py-2 rounded-lg">
                  문의하기
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
