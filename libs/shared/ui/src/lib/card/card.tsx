import React from 'react';
import { VariableIcon } from '@heroicons/react/24/solid';

/* eslint-disable-next-line */
export interface CardProps {
  textEn: string;
  textId: string;
  title: string;
}

export function Card({ textEn, textId, title }: CardProps) {
  return (
    <div className='font-thin'>
      <h2 className='text-xl mb-4'>{title}</h2>
      <div className="bg-secondary rounded p-4  flex justify-start w-full  text-tertiary items-start">
        <VariableIcon className="h-7 w-7 mr-4 flex-shrink-0" />
        <div>
          <p className="flex-grow break-all">{textEn}</p>
          <p className="flex-grow break-all mt-4">({textId})</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
