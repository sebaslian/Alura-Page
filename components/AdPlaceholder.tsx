import React from 'react';
import { useLanguage } from '../App';
import { UI_TEXT } from '../constants';

interface AdPlaceholderProps {
  className?: string;
  format?: 'horizontal' | 'rectangle' | 'vertical';
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ className = '', format = 'horizontal' }) => {
  const { language } = useLanguage();

  // CLS Protection: Strict dimensions are crucial for Core Web Vitals
  let containerStyles = "w-full mx-auto my-8";
  let sizeStyles = "h-[100px]"; // Mobile banner default
  
  if (format === 'horizontal') {
    sizeStyles = "h-[250px] sm:h-[90px] md:h-[90px]"; // Rectangle on mobile, Leaderboard on desktop
  }
  if (format === 'rectangle') {
    sizeStyles = "h-[250px] max-w-[300px]"; // Medium Rectangle
  }
  if (format === 'vertical') {
    sizeStyles = "h-[600px] max-w-[300px] lg:max-w-[160px]"; // Skyscraper
  }

  return (
    <div className={`${containerStyles} ${className}`}>
      {/* Label outside the ad container to avoid policy violation regarding "misleading content" */}
      <div className="text-[10px] uppercase tracking-widest text-gray-400 text-center mb-1 font-sans">
        {UI_TEXT.ad_label[language]}
      </div>
      
      {/* The Ad Container */}
      <div 
        className={`bg-gray-100 border border-gray-200 rounded-sm flex flex-col items-center justify-center p-4 text-center overflow-hidden max-w-full ${sizeStyles} w-full`} 
        role="complementary" 
        aria-label="Advertisement"
      >
        <div className="text-gray-300 font-bold text-lg select-none">
          Google AdSpace
          <span className="block text-xs font-normal mt-1 opacity-70">{format}</span>
        </div>
      </div>
    </div>
  );
};