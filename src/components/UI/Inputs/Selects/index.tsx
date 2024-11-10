import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { IOptions } from "../../../../interface/InterfaceSelects/interface.selects"; 
import { useEffect, useState } from "react";
import { useTheme } from "../../../../hooks/useTheme/useTheme";
    
type SelectsProps = {
    options: IOptions[];
    handleSelect: (item: string) => void;
    label: string;
    widthSelect?: Record<string, string> | string | null;
};

export const Selects = ({ options, widthSelect, handleSelect, label }: SelectsProps) => {
    const [itemSelected, setItemSelected] = useState(options.length > 0 ? options[0].value : "");
    const {theme} = useTheme()

    const handleChange = (event: SelectChangeEvent<string>) => {
        setItemSelected(event.target.value);
    };

    useEffect(() => {
        handleSelect(itemSelected);
    }, [itemSelected]);

    return (
        <Select
            sx={{
                width: widthSelect ?? "100%",
                height: "1.8rem",
                background: theme.colors.secondary,
                fontSize: "0.9rem",
                border: "none",
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
                "&.Mui-focused": {
                    backgroundColor: "transparent",
                    boxShadow: `0 0 0 1px ${theme.colors.primary}`,
                },
            }}
            value={itemSelected}
            label={label}
            onChange={handleChange}
        >
            {options.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                    {item.label}
                </MenuItem>
            ))}
        </Select>
    );
};
