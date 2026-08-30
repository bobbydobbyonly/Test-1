import React from 'react';
import profileImage from '../../jo_studio38 profile.PNG';

interface AvatarIconProps {
  className?: string;
  size?: number;
}

export const AvatarIcon: React.FC<AvatarIconProps> = ({ className = '', size = 120 }) => {
  return (
    <div
      id="avatar-container"
      className={'inline-block select-none overflow-hidden transition-transform duration-200 hover:scale-105 ' + className}
      style={{ width: size, height: size }}
    >
      <img
        src={profileImage}
        alt="Jo"
        className="h-full w-full object-cover"
      />
    </div>
  );
};
