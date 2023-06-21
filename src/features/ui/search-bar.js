import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const styles = {
  borderRadius: '25px',
};

function SearchBar({ setSearchQuery }) {
  return (
    <form style={{ marginBottom: '35px' }}>
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
