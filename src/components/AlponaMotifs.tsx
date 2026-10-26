import React from 'react';

// Traditional Bengali Alpona border frieze (reproducible pattern of lotus and kalka motifs)
export const AlponaBorder: React.FC<{ className?: string; color?: string; inverted?: boolean }> = ({
  className = "w-full h-5",
  color = "#B83B0E",
  inverted = false,
}) => {
  return (
    <div className={`overflow-hidden select-none pointer-events-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 24"
        preserveAspectRatio="repeat-x"
        className={`w-full h-full ${inverted ? 'rotate-180' : ''}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="alpona-unit" width="100" height="24" patternUnits="userSpaceOnUse">
            {/* Base undulating vine line */}
            <path
              d="M0 12 Q25 4 50 12 T100 12"
              stroke={color}
              strokeWidth="1.5"
              fill="none"
            />
            {/* Top decorative bud / leaf */}
            <path
              d="M25 7 C25 2, 35 2, 35 7 C35 11, 25 11, 25 7 Z"
              fill={color}
              opacity="0.85"
            />
            {/* Bottom kalka flourish */}
            <path
              d="M75 17 C75 22, 65 22, 65 17 C65 13, 75 13, 75 17 Z"
              fill={color}
              opacity="0.85"
            />
            {/* Center lotus seed point */}
            <circle cx="50" cy="12" r="2.5" fill={color} />
            <circle cx="0" cy="12" r="2" fill={color} />
            <circle cx="100" cy="12" r="2" fill={color} />
            {/* Micro pearl dots along wave */}
            <circle cx="15" cy="8.5" r="1" fill={color} opacity="0.6" />
            <circle cx="35" cy="8.5" r="1" fill={color} opacity="0.6" />
            <circle cx="65" cy="15.5" r="1" fill={color} opacity="0.6" />
            <circle cx="85" cy="15.5" r="1" fill={color} opacity="0.6" />
          </pattern>
        </defs>
        <rect width="1200" height="24" fill="url(#alpona-unit)" />
      </svg>
    </div>
  );
};

// Traditional Center Alpona Divider with lotus center & side scrolls
export const AlponaDivider: React.FC<{ className?: string; color?: string }> = ({
  className = "w-full max-w-md mx-auto my-6",
  color = "#B83B0E",
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 select-none pointer-events-none ${className}`} aria-hidden="true">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#B83B0E]/30 to-[#B83B0E]/70" />
      <svg
        viewBox="0 0 120 28"
        className="h-6 w-28 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central Blooming Lotus */}
        <path
          d="M60 4 C57 12 55 18 60 22 C65 18 63 12 60 4 Z"
          fill={color}
        />
        {/* Left inner petal */}
        <path
          d="M60 22 C53 19 49 13 52 8 C55 13 57 18 60 22 Z"
          fill={color}
          opacity="0.8"
        />
        {/* Right inner petal */}
        <path
          d="M60 22 C67 19 71 13 68 8 C65 13 63 18 60 22 Z"
          fill={color}
          opacity="0.8"
        />
        {/* Left outer kalka spiral */}
        <path
          d="M50 20 C42 20 36 15 38 9 C40 4 47 6 46 11 C45 14 41 14 41 12"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Right outer kalka spiral */}
        <path
          d="M70 20 C78 20 84 15 82 9 C80 4 73 6 74 11 C75 14 79 14 79 12"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Dots */}
        <circle cx="26" cy="14" r="1.5" fill={color} />
        <circle cx="94" cy="14" r="1.5" fill={color} />
        <circle cx="16" cy="14" r="1" fill={color} opacity="0.6" />
        <circle cx="104" cy="14" r="1" fill={color} opacity="0.6" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#B83B0E]/30 to-[#B83B0E]/70" />
    </div>
  );
};

// Radial circular Alpona mandala (used as background seal, watermark, or decorative medal)
export const AlponaMandala: React.FC<{ className?: string; color?: string; opacity?: number }> = ({
  className = "w-48 h-48",
  color = "#B83B0E",
  opacity = 0.15,
}) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`select-none pointer-events-none ${className}`}
      style={{ opacity }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer dotted ring */}
      <circle cx="100" cy="100" r="92" stroke={color} strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="86" stroke={color} strokeWidth="1.5" />
      
      {/* 16-petal lotus perimeter */}
      {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, idx) => (
        <g key={idx} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M100 14 C96 22 96 32 100 38 C104 32 104 22 100 14 Z"
            fill={color}
          />
          <circle cx="100" cy="12" r="1.5" fill={color} />
        </g>
      ))}

      {/* Mid ring */}
      <circle cx="100" cy="100" r="62" stroke={color} strokeWidth="1.2" />
      
      {/* 8 traditional Bengali kalka paisley petals in inner ring */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
        <g key={`inner-${idx}`} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M100 42 C92 52 90 65 100 72 C110 65 108 52 100 42 Z"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <circle cx="100" cy="56" r="2.5" fill={color} />
        </g>
      ))}

      {/* Inner floral star */}
      <circle cx="100" cy="100" r="28" stroke={color} strokeWidth="1.5" />
      <circle cx="100" cy="100" r="18" fill={color} fillOpacity="0.2" />
      <circle cx="100" cy="100" r="7" fill={color} />
    </svg>
  );
};

// Official Institute Crest / Seal
export const InstituteCrest: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 46,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[#B83B0E] via-[#A02C06] to-[#782005] p-2 text-amber-200 shadow-md border border-[#D4AC0D]/40 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer ornamental perimeter */}
        <circle cx="50" cy="50" r="46" stroke="#D4AC0D" strokeWidth="2" strokeDasharray="3 2" />
        <circle cx="50" cy="50" r="42" stroke="#FDFBF7" strokeWidth="1" />
        
        {/* Lamp flame (জ্ঞানশিখা / Prodeep Flame) */}
        <path
          d="M50 18 C46 25 43 32 50 40 C57 32 54 25 50 18 Z"
          fill="#F9D776"
        />
        <circle cx="50" cy="30" r="2.5" fill="#FFFFFF" />

        {/* Traditional Brass Diya Base */}
        <path
          d="M34 40 C34 46 44 48 50 48 C56 48 66 46 66 40 L60 38 C56 40 44 40 40 38 Z"
          fill="#D4AC0D"
        />

        {/* Open Book of Knowledge (বিদ্যা) */}
        <path
          d="M24 62 C34 58 44 60 50 63 C56 60 66 58 76 62 L74 76 C66 72 56 74 50 78 C44 74 34 72 26 76 Z"
          fill="#FDFBF7"
          stroke="#782005"
          strokeWidth="1.2"
        />
        {/* Spine & pages lines */}
        <path d="M50 63 L50 78" stroke="#782005" strokeWidth="1.5" />
        <path d="M30 67 C36 65 42 66 46 68" stroke="#B83B0E" strokeWidth="0.8" />
        <path d="M70 67 C64 65 58 66 54 68" stroke="#B83B0E" strokeWidth="0.8" />

        {/* Lotus base petals */}
        <path
          d="M36 82 C44 80 50 83 50 83 C50 83 56 80 64 82 C58 87 50 88 50 88 C50 88 42 87 36 82 Z"
          fill="#D4AC0D"
        />
      </svg>
    </div>
  );
};
