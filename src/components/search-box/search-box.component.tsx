import { ChangeEventHandler, ChangeEvent } from "react";

import './search-box.styles.css'

type SearchBoxProps = {
  className: string;
  placeholder: string;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxProps) => {
  return (
    <input
    type="search"
    placeholder={placeholder}
    className={`search-box  ${className}`}
    onChange={onChangeHandler}
  />
  )
}



export default SearchBox;
