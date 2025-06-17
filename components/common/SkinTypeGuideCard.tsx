
import React from 'react';
import type { SkinTypeGuideCardProps } from '../../types';

const ShieldIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 inline-block mr-2 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);

const ProhibitedIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 inline-block mr-2 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
  </svg>
);


const SkinTypeGuideCard: React.FC<SkinTypeGuideCardProps> = ({
  title,
  characteristics,
  weaponsTitle = "Suas \"Armas\" (Ingredientes-Amigos):",
  weapons,
  villainsTitle = "Seus \"Vilões\" (Ingredientes-Inimigos):",
  villains,
  routineTitle = "Sua Rotina de Ataque de 2 Passos (Para os próximos 7 dias):",
  routine,
  mainIngredientImage,
  imageAltText,
  icon
}) => {
  return (
    <div className="bg-white shadow-xl rounded-xl p-6 md:p-8 my-8 transition-shadow hover:shadow-2xl">
      <div className="flex items-center mb-4">
        {icon && <div className="mr-3 text-ebook-highlight">{icon}</div>}
        <h3 className="text-3xl font-bold text-ebook-highlight">{title}</h3>
      </div>
      
      {mainIngredientImage && (
        <img 
          src={mainIngredientImage} 
          alt={imageAltText || `Ingrediente principal para ${title}`} 
          className="w-full h-48 object-cover rounded-lg mb-6 shadow-md" 
        />
      )}

      <div className="mb-6 prose prose-sm sm:prose-base max-w-none text-ebook-text">
        <p className="italic text-gray-700">{characteristics}</p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-semibold text-ebook-highlight mb-3 flex items-center">
          <ShieldIcon className="text-green-600" /> {weaponsTitle}
        </h4>
        <ul className="list-none pl-0 space-y-2">
          {weapons.map((item, index) => (
            <li key={index} className="text-ebook-text pl-4 border-l-2 border-green-200 py-1">
              <strong className="font-semibold">{item.name}:</strong> {item.description || ""}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-semibold text-ebook-highlight mb-3 flex items-center">
          <ProhibitedIcon className="text-red-500" /> {villainsTitle}
        </h4>
        <ul className="list-none pl-0 space-y-2">
          {villains.map((item, index) => (
            <li key={index} className="text-ebook-text pl-4 border-l-2 border-red-200 py-1">
               <strong className="font-semibold">{item.name}:</strong> {item.description || ""}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-xl font-semibold text-ebook-highlight mb-3">{routineTitle}</h4>
        <div className="prose prose-sm sm:prose-base max-w-none text-ebook-text">{routine}</div>
      </div>
    </div>
  );
};

export default SkinTypeGuideCard;
