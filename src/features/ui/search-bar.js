import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const styles = {
  borderRadius: '5px',
  background: 'rgb(247, 247, 247)',
  border: 'none',
  '& fieldset': { border: 'none' },
};

const SearchButton = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: rgba(0, 0, 0, 0.54);
  cursor: pointer;
`;

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event?.key === 'Enter' && searchQuery !== '') {
      navigate(`/recipes/${searchQuery.toLocaleLowerCase()}`);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (searchQuery !== '') {
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
        onKeyDown={(e) => handleSearch(e)}
        placeholder="Search any recipe"
        variant="outlined"
        InputProps={{
          sx: styles,
          endAdornment: (
            <InputAdornment position="end">
              <SearchButton onClick={(event) => handleClick(event)}>
                <SearchIcon />
              </SearchButton>
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
