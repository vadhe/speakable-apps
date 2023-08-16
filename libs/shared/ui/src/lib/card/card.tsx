import React from 'react';
import { VariableIcon } from '@heroicons/react/24/solid'

/* eslint-disable-next-line */
export interface CardProps {
  text: string
}

export function Card({text}: CardProps) {
  return (
    <div className='bg-secondary rounded p-4  flex justify-start w-full  text-tertiary items-start'>
    <VariableIcon className="h-7 w-7 mr-4 flex-shrink-0" />
     <p className='flex-grow break-all'>{text}</p>
    </div>
  );
}

export default Card;
