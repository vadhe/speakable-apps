export interface SearchProps {
  placeHolder: string
}

export function Search({placeHolder}: SearchProps) {
  return (
   <input className="w-full bg-transparent text-tertiary rounded-full focus:outline-none p-2 border border-tertiary" placeholder={placeHolder}/>
  );
}

export default Search;
