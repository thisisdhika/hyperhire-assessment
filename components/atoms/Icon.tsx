'use client';

import * as React from 'react';

const iconList = {
  kor: () => import('@/assets/icons/kor.svg'),
  box: () => import('@/assets/icons/box.svg'),
  code: () => import('@/assets/icons/code.svg'),
  gear: () => import('@/assets/icons/gear.svg'),
  call: () => import('@/assets/icons/call.svg'),
  image: () => import('@/assets/icons/image.svg'),
  target: () => import('@/assets/icons/target.svg'),
  avatar: () => import('@/assets/icons/avatar.svg'),
  marketing: () => import('@/assets/icons/marketing.svg'),
  'caret-down': () => import('@/assets/icons/caret-down.svg'),
  'caret-left': () => import('@/assets/icons/caret-left.svg'),
  'caret-right': () => import('@/assets/icons/caret-right.svg'),
  'dollar-sign': () => import('@/assets/icons/dollar-sign.svg'),
  'square-arrow-right': () => import('@/assets/icons/square-arrow-right.svg'),
};

export type Icons = keyof typeof iconList;
export type IconProps = {
  name: Icons;
  size?: number;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, size = 24, className }) => {
  const [IconComponent, setIconComponent] = React.useState<React.ComponentType<React.SVGProps<{}>> | null>(null);

  React.useEffect(() => {
    const loadIcon = async () => {
      try {
        const importedIcon = await iconList[name]();
        setIconComponent(() => importedIcon.default);
      } catch (error) {
        console.error(`Error loading icon "${name}":`, error);
        setIconComponent(null); // Handle missing icons gracefully
      }
    };

    loadIcon();
  }, [name]);

  if (!IconComponent) {
    return <div style={{ width: size, height: size }} />;
  }

  return <IconComponent width={size} height={size} className={className} aria-hidden="true" />;
};

export default Icon;
