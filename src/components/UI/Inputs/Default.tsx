import { TextField, Typography } from "@mui/material"
import { UseFormRegister } from "react-hook-form"


type IDefault = {
    register: UseFormRegister<any>
    name: string
    placeholder?: string | null
    background?: string | null
    backgroundHover?: string | null
    colorFocused?: string | null
    backgroundFieldFocused?: string | null
    error?: string | null
}

export const Default = ({register,name,placeholder,background,error, colorFocused, backgroundFieldFocused}: IDefault) => {

    return (
        <>
         <TextField 
        {...register(name)}   
        variant="outlined"
        placeholder={placeholder ?? ''}
        sx={{
            borderRadius: 1,
            background: background ?? 'white' ,//theme.colors.secondary
            
            "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray", // Borda padrão
                },
                "&:hover fieldset": {
                  borderColor: "darkgray", // Borda no hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: backgroundFieldFocused //theme.colors.redDark, // Borda quando focado
                },
              },
              "& .MuiFormLabel-root": {
                color: "gray", // Cor do label padrão
              },
              "& .Mui-focused": {
                color: colorFocused  //theme.colors.terciary, // Cor do label quando focado
              },
        }}
        />
            {error && (
                <Typography sx={{fontSize: 16, color: "crimson"}}>{error}</Typography>
            )}
        </>
       
    
    )
}