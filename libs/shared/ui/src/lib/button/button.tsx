import { MouseEvent, ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center bg-secondary w-full mt-6 rounded-full py-2"
    >
      {children}
    </button>
  );
}

export default Button;
