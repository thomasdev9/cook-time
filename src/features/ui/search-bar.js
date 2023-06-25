import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const styles = {
  borderRadius: '5px',
  background: 'rgb(247, 247, 247)',
  border: 'none',
  '& fieldset': { border: 'none' },
};

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.key === 'Enter' && searchQuery !== '') {
      navigate(`/recipes/${searchQuery.toLocaleLowerCase()}`);
    }
  };

  return (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        onKeyDown={(e) => handleSearch(e, searchQuery)}
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
