import React, { useEffect } from 'react';
import { Autocomplete, TextField, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface Option {
  id: string;
  idCourse?: string;
  title: string;
  category: string;
  description: string;
}

interface SearchInputAutocompleteProps {
  options: Option[]; 
  onSearch: (value: Option | null) => void; 
}

const SearchInputAutocomplete: React.FC<SearchInputAutocompleteProps> = ({ options, onSearch }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [selectedOption, setSelectedOption] = React.useState<Option | string | null>(null);

  const handleSearch = () => {
    onSearch(selectedOption as Option | null); 
  };

  const filteredOptions = options.filter((option) =>
    option.title.toLowerCase().includes(inputValue.toLowerCase()) ||
    option.category.toLowerCase().includes(inputValue.toLowerCase()) ||
    option.description.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    if (selectedOption && typeof selectedOption !== 'string') {
      onSearch(selectedOption);
    }
  }, [selectedOption, onSearch]);

  return (
    <Box sx={{ display: 'flex', width: "100%", background: 'white', borderRadius: 1 }}>
      <Autocomplete
        freeSolo
        options={filteredOptions}
        getOptionLabel={(option) => typeof option === 'string' ? option : option.title} 
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onChange={(_, newSelectedOption) => {
          setSelectedOption(newSelectedOption); 
        }}
        sx={{
          width: 200,
          border: "none",
          "& .MuiOutlinedInput-root": {
            borderRadius: 5,
            "& fieldset": {
              borderColor: "#000000", // Cor vermelha do outline
            },
            "&:hover fieldset": {
              borderColor: "#030303", // Cor vermelha ao passar o mouse (hover)
            },
            "&.Mui-focused fieldset": {
              borderColor: "#111010", // Cor vermelha ao focar no campo
            },
          },
          "& .MuiFormLabel-root": {
            color: "#020202", // Cor vermelha do label
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "#161616", // Cor vermelha do label ao focar
          },

        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Encontre seu curso..."
            variant="filled"
            size="small"
            sx={{
              backgroundColor: "white",
              border: "none",
              padding: 0,
              borderRadius: 10,
              maxHeight: 45
            }}
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
