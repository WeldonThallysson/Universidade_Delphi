import { Box, MenuItem, TextField, Typography } from "@mui/material";
import { IOptions } from "../../../../interface/InterfaceSelects/interface.selects";
import { useTheme } from "../../../../hooks/useTheme/useTheme";
 
import { useState, useEffect } from "react";
import { Containers } from "../../Containers";

type SelectInputProps = {
    label?: string | null;
    labelInput?: string | null;
    width: Record<string, string> | string | null;
    options: IOptions[];
    backgroundFieldFocused?: string | null;
    errorMessage?: string | null;
    defaultValue?: string | null;  // Alterado para string
    handleOptionSelected?: (item: string) => void;
};

export const SelectInput = ({
    label,
    labelInput,
    width,
    options,
    errorMessage,
    backgroundFieldFocused,
    handleOptionSelected,
    defaultValue = ''  // Valor padrão para evitar undefined
}: SelectInputProps) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const {theme} = useTheme()
    useEffect(() => {
        setSelectedValue(defaultValue);
    }, [defaultValue]);

    const handleChange = (value: string) => {
        setSelectedValue(value);
        if (handleOptionSelected) handleOptionSelected(value);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: width ?? "100%", gap: 0.2 }}>
            {label && (
              <Typography sx={{fontFamily: "Poppins", fontSize: 15}}>{label}</Typography>
            )}
            <TextField
              
                sx={{
                    width: width ?? "100%",
                    "& .MuiOutlinedInput-root": {
                        display: "flex",
                        alignItems: "center",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: backgroundFieldFocused || ''
                    },
                }}
                id="outlined-select-gender"
                select
                size="small"
                label={labelInput}
                value={selectedValue}
                onChange={(item) => handleChange(item.target.value)} 
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            {errorMessage && (
                <Containers.Default gap={0.4} alignItems={"center"} width={"100%"}>
                    <Typography sx={{ mt: 0.1, fontSize: 14, color: theme.colors.redDark }}>
                        {errorMessage}
                    </Typography>
                </Containers.Default>
            )}
        </Box>
    );
};
