import { ChangeEventHandler } from 'react';
export interface SearchProps {
  placeHolder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export function Search({placeHolder, value,onChange}: SearchProps) {
  return (
   <input value={value} onChange={onChange} className="w-full font-thin bg-transparent text-tertiary rounded-full focus:outline-none px-4 py-2  border border-tertiary" placeholder={placeHolder}/>
  );
}

export default Search;
