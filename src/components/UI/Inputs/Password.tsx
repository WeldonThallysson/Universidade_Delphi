import { OutlinedInput, Typography, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

type IPassword = {
    register: UseFormRegister<any>;
    name: string;
    placeholder?: string | null;
    background?: string | null;
    backgroundHover?: string | null;
    colorFocused?: string | null;
    backgroundFieldFocused?: string | null;
    error?: string | null;
    heightInput?: number | null
};

export const Password = ({
    register,
    name,
    placeholder,
    background,
    error,
    colorFocused,
    backgroundFieldFocused,
    heightInput
}: IPassword) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <>
            <OutlinedInput
                {...register(name)}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder ?? ''}
                color="error"
                sx={{
                    borderRadius: 1,
                    background: background,
                    height: heightInput ?? 48,  
                    "& fieldset": {
                  
                        borderColor: "gray",
                    },
                    "&:hover fieldset": {
                        borderColor: "darkgray",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: backgroundFieldFocused || "blue",
                    },
                    "&.Mui-focused .MuiOutlinedInput-input": {
                        color: colorFocused || "black",
                    },
                }}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility} edge="end" sx={{mr: 0.1}}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            {error && (
                <Typography sx={{ fontSize: 16, color: "crimson" }}>{error}</Typography>
            )}
        </>
    );
};
