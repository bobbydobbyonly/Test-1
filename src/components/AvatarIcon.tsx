import React from 'react';

interface AvatarIconProps {
  className?: string;
  size?: number;
}

export const AvatarIcon: React.FC<AvatarIconProps> = ({ className = '', size = 120 }) => {
  return (
    <div
      id="avatar-container"
      className={`inline-block select-none overflow-hidden transition-transform duration-200 hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background / Canvas */}
        <rect width="160" height="160" fill="transparent" />

        {/* Neck */}
        <path
          d="M72 100 V115 H88 V100"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#FFFFFF"
        />

        {/* Shoulders / Torso - Solid Black */}
        <path
          d="M32 160 C32 126 50 114 80 114 C110 114 128 126 128 160 Z"
          fill="#000000"
        />

        {/* Collar line */}
        <path
          d="M70 114 C70 120 90 120 90 114"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Ears */}
        <path
          d="M52 70 C46 70 46 84 52 84"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="#FFFFFF"
        />
        <path
          d="M108 70 C114 70 114 84 108 84"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="#FFFFFF"
        />

        {/* Head Contour */}
        <path
          d="M52 64 C52 42 62 36 80 36 C98 36 108 42 108 64 C108 90 98 104 80 104 C62 104 52 90 52 64 Z"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#FFFFFF"
        />

        {/* Hair - Solid Black */}
        <path
          d="M52 60 C50 48 56 32 80 30 C104 32 110 48 108 60 C104 46 96 40 80 40 C64 40 56 46 52 60 Z"
          fill="#000000"
        />
        {/* Hair bangs / volume */}
        <path
          d="M51 56 C53 36 65 26 80 26 C95 26 107 36 109 56 C106 44 98 36 80 36 C62 36 54 44 51 56 Z"
          fill="#000000"
        />

        {/* Glasses - Black Thick Frames */}
        {/* Left lens frame */}
        <circle
          cx="68"
          cy="70"
          r="10.5"
          stroke="#000000"
          strokeWidth="3.5"
          fill="#FFFFFF"
        />
        {/* Right lens frame */}
        <circle
          cx="92"
          cy="70"
          r="10.5"
          stroke="#000000"
          strokeWidth="3.5"
          fill="#FFFFFF"
        />
        {/* Glasses bridge */}
        <path
          d="M78.5 69 H81.5"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Glasses arms */}
        <path
          d="M57.5 70 H52"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M102.5 70 H108"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Eyes (dots inside glasses) */}
        <circle cx="68" cy="70" r="2.2" fill="#000000" />
        <circle cx="92" cy="70" r="2.2" fill="#000000" />

        {/* Eyebrows */}
        <path
          d="M62 55 Q68 53 74 56"
          stroke="#000000"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M86 56 Q92 53 98 55"
          stroke="#000000"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Nose */}
        <path
          d="M80 73 V78"
          stroke="#000000"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Smile */}
        <path
          d="M74 86 Q80 91 86 86"
          stroke="#000000"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
