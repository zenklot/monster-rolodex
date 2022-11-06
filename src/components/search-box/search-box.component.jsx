import { Component } from "react";

import './search-box.styles.css'

class SearchBox extends Component {
  render() {
    const { placeholder, className, onChangeHandler } = this.props;

    return (
      <input
        type="search"
        placeholder={placeholder}
        className={`search-box  ${className}`}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
