
import React from 'react';

interface HighlightBoxProps {
  children: React.ReactNode;
  className?: string;
}

const HighlightBox: React.FC<HighlightBoxProps> = ({ children, className }) => {
  return (
    <div className={`bg-ebook-highlight-soft p-6 my-6 rounded-lg border-l-4 border-ebook-highlight ${className}`}>
      {children}
    </div>
  );
};

export default HighlightBox;
  
