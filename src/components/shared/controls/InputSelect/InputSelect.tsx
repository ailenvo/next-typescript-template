import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormControl, FormHelperText, InputLabel } from "@mui/material";
import { IValue } from "../../../../models/common/model.type";

type Props = {
  options: IValue[];
  id?: string;
  fullWidth?: boolean;
  label?: React.ReactNode;
  required?: boolean;
  value?: any;
  onChange: (event: SelectChangeEvent<any>, child: React.ReactNode) => void;
  variant?: "filled" | "outlined" | "standard";
  size?: "small" | "medium";
  errorField?: any;
  multiple?: boolean;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
};

export default function InputSelect({
  options = [],
  id = "input-select",
  fullWidth = true,
  label,
  required,
  value,
  onChange,
  variant = "outlined",
  size = "small",
  errorField,
  multiple,
  placeholder,
  className,
  disabled,
}: Props) {
  return (
    <FormControl classes={className} sx={{ width: "100%" }}>
      <InputLabel
        error={errorField ? true : false}
        required={required}
        shrink
        disabled={disabled}
        sx={{ backgroundColor: "#FFF", paddingX: 1, marginLeft: -0.5 }}
        id={`${id}-label`}
      >
        {label}
      </InputLabel>
      <Select
        labelId={`${id}-label`}
        id={`${id}`}
        fullWidth={fullWidth}
        value={value}
        disabled={disabled}
        onChange={onChange}
        variant={variant}
        size={size}
        error={errorField ? true : false}
        multiple={multiple}
        renderValue={(selected: any) => {
          if (
            typeof selected === "string" ||
            typeof selected === "number" ||
            typeof selected === "boolean"
          ) {
            const textValue =
              (options.find((item) => item.value === selected)?.label || "") ??
              (placeholder || "");

            return textValue;
          }
          if (typeof selected === "object" && selected.length) {
            return placeholder && (selected as string[]).includes(placeholder)
              ? placeholder
              : selected.join(", ");
          }

          return placeholder;
        }}
      >
        {placeholder && <MenuItem disabled>{placeholder}</MenuItem>}
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.icon}
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText error>{errorField?.message}</FormHelperText>
    </FormControl>
  );
}
