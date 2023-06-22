import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const styles = {
  borderRadius: '5px',
  background: 'rgb(247, 247, 247)',
  border: 'none',
  '& fieldset': { border: 'none' },
};

function SearchBar({ setSearchQuery }) {
  return (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        placeholder="Search any recipe"
        variant="outlined"
        InputProps={{
          sx: styles,
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        size="small"
        fullWidth
      />
    </form>
  );
}

export default SearchBar;
