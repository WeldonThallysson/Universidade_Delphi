import React from 'react';
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



  return (
    <Box sx={{ display: 'flex', width: "100%", background: '#3d3d3d71', borderRadius: 1,  }}>
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
          width: {
            xs: "100%",
            lg: 200
          },
          color:"white",
          border: "none",
          
          "& .MuiOutlinedInput-root": {
            borderRadius: 5,
            "& fieldset": {
              borderColor: "#ffffff", // Cor vermelha do outline
            },
            "&:hover fieldset": {
              borderColor: "#ffffff", // Cor vermelha ao passar o mouse (hover)
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ffffff", // Cor vermelha ao focar no campo
            },
          },
          "& .MuiFormLabel-root": {
            color: "#ffffff", // Cor vermelha do label
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "#ffffff", // Cor vermelha do label ao focar
          },
          "& .MuiAutocomplete-clearIndicator": {
            color: "#ffffff", // Altera a cor do "x" (botão de limpar)
          },

        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Encontre seu curso..."
            variant="filled"
            size="small"
            sx={{
              backgroundColor: "#3d3d3d7a",
              border: "none",
              padding: 0,
              borderRadius: 1,
              color:"#fff",
              maxHeight: 45,
              "& .MuiInputBase-input": {
                color: "#fff", 
              }
            }}
          />
        )}
      />
      <IconButton onClick={handleSearch}>
        <SearchIcon sx={{color: 'white'}} />
      </IconButton>
    </Box>
  );
};

export default SearchInputAutocomplete;
