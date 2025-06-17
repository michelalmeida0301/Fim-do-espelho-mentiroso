
import React from 'react';

export interface SkinTypeGuideCardProps {
  title: string;
  characteristics: React.ReactNode;
  weaponsTitle?: string;
  weapons: { name: string; description?: string }[];
  villainsTitle?: string;
  villains: { name: string; description?: string }[];
  routineTitle?: string;
  routine: React.ReactNode;
  mainIngredientImage?: string; // URL for picsum
  imageAltText?: string;
  icon?: React.ReactNode;
}

export interface EnemyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tip: string;
}
