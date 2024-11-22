import * as React from 'react';
import Icon from '@/components/atoms/Icon';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, link }) => (
  <div className="p-4 rounded-xl bg-white">
    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-md mb-4">{icon}</div>
    <h4 className="font-semibold text-primaryText mb-2">{title}</h4>
    <p className="text-sm text-secondaryText">{description}</p>

    <a href={link} className="text-sm text-secondaryText font-medium hover:underline flex items-center">
      바로가기
      <span className="ml-1">
        <Icon name="square-arrow-right" />
      </span>
    </a>
  </div>
);

export default Card;
