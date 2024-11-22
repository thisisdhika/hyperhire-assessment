'use client';

import * as React from 'react';
import Image from 'next/image';
import Icon from '@/components/atoms/Icon';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleDropdown = React.useCallback(() => setIsDropdownOpen(!isDropdownOpen), []);
  const closeDropdown = React.useCallback(() => setIsDropdownOpen(false), []);

  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.svg" alt="Hyperhire" width={115} height={20} />
          </div>

          <nav className="flex space-x-8">
            <div
              className="relative inline-block text-white"
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}>
              <a href="#" className="font-semibold text-white hover:underline cursor-pointer">
                채용 <Icon size={18} name="caret-down" className="inline-block align-sub" />
              </a>
              {/* Dropdown Content */}
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
            <a href="#" className="font-semibold text-white hover:underline ">
              해외 개발자 활용 서비스
            </a>
          </nav>

          <button className="bg-white text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-100">
            문의하기
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
