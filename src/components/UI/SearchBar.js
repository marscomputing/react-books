import { useRef } from 'react'; 

import classes from './SearchBar.module.css';

function SearchBar() {
  const searchInputRef = useRef();
  const typeInputRef = useRef();

  return <div>
    <form className={classes.form}>
        <div className={classes.control}>
            <input type='text' placeholder='Search' id='search' ref={searchInputRef} />
        </div>
        <div className={classes.control}>
            <select placeholder='Type' id='type'  ref={typeInputRef}>
              <option>A</option>
              <option>B</option>
            </select>
        </div>
        <div className={classes.actions}>
            <button>List</button>
        </div>
        <div className={classes.actions}>
            <button>Grid</button>
        </div>
    </form>
  </div>
}

export default SearchBar;