import { Box, TextField, Typography } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

type IDefault = {
    register: UseFormRegister<any>;
    name: string;
    placeholder?: string | null;
    background?: string | null;
    backgroundHover?: string | null;
    colorFocused?: string | null;
    backgroundFieldFocused?: string | null;
    error?: string | null;
    heightInput?: number | null;
    label?:string | null
};

export const Default = ({
    register,
    name,
    placeholder,
    heightInput,
    background,
    label,
    error,
    colorFocused,
    backgroundFieldFocused,
}: IDefault) => {
    return (
        <Box sx={{
          display:"flex",
          flexDirection: "column",
          gap: 0.2
        }}>
            {label && (
              <Typography sx={{fontFamily: "Poppins", fontSize: 15}}>{label}</Typography>
            )}
            <TextField
                {...register(name)}
                variant="outlined"
                placeholder={placeholder ?? ''}
                sx={{
                    borderRadius: 1,
                    background: background ?? 'white',
                    height: heightInput ?? 48,
                    "& .MuiOutlinedInput-root": {
                        height: heightInput ?? 48,
                         padding: '0.25rem',
                        "& fieldset": {
                            borderColor: "#c0c0c0", // Borda padrão
                        },
                        "&:hover fieldset": {
                            borderColor: "darkgray", // Borda no hover
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: backgroundFieldFocused, // Borda quando focado
                        },
                    },
                    "& .MuiInputBase-input": {
                        height: 28, // Define a altura do input
                        padding: "0.5rem", // Ajuste o padding se necessário
                    
                      },
                    "& .MuiFormLabel-root": {
                        color: "gray", // Cor do label padrão
                    },
                    "& .Mui-focused": {
                        color: colorFocused, // Cor do label quando focado
                    },
                }}
                InputProps={{
                    style: {
                        height: heightInput ?? 48, // Garante a altura do input
                    },
                }}
            />
            {error && (
                <Typography sx={{ fontSize: 16, color: "crimson" }}>{error}</Typography>
            )}
        </Box>
    );
};
