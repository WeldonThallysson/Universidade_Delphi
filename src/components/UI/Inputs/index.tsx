import React from 'react';
import { Autocomplete, TextField, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchInputAutocompleteProps {
  options: string[]; // Lista de opções de autocomplete
  onSearch: (value: string) => void; // Função chamada ao pesquisar
}

const SearchInputAutocomplete: React.FC<SearchInputAutocompleteProps> = ({ options, onSearch }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <Box sx={{ display: 'flex', width:"100%"}}>
      <Autocomplete
        freeSolo
        options={options}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            variant="outlined"
            size="small"
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
        )}
      />
      <IconButton onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchInputAutocomplete;
