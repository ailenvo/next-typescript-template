import { Control, Controller, FieldError } from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { UIEventHandler } from "react";
import { IValue } from "../../../models/common/model.type";
import { safeRead } from "../../../utils";

export interface FormInputSelectProps {
  // required by validate
  name: string;
  control: Control<any, object>;
  errors?: any;
  // more field
  id?: string;
  options: IValue[];
  fullWidth?: boolean;
  label?: React.ReactNode;
  variant?: "filled" | "outlined" | "standard";
  size?: "small" | "medium";
  required?: boolean;
  onChange?: (value: any) => void;
  rules?: any;
  disabled?: boolean;
  helperText?: any;
  className?: any;
  disabledOption?: any;
  onScroll?: UIEventHandler<HTMLDivElement>;
}

export const FormInputSelect = ({
  name,
  label,
  control,
  errors,
  disabled,
  rules,
  // more fields
  options: list = [],
  id = "input-select",
  fullWidth = true,
  variant = "outlined",
  size = "small",
  required,
  helperText,
  className,
  onChange,
  disabledOption,
  onScroll,
}: FormInputSelectProps) => {
  const error: FieldError = safeRead(errors, name) as any;

  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormControl
          sx={{ width: "100%" }}
          disabled={disabled}
          className={className}
        >
          <InputLabel
            error={!!error}
            shrink
            sx={{ backgroundColor: "#FFF", paddingX: 1, marginLeft: -0.5 }}
            id={`${id}-label`}
            required={required}
          >
            {label}
          </InputLabel>
          <Select
            labelId={`${id}-label`}
            id={`${id}`}
            fullWidth={fullWidth}
            {...field}
            onChange={onChange ? onChange : field.onChange}
            value={field.value ?? ""}
            variant={variant}
            onScroll={onScroll}
            size={size}
          >
            {list.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
                disabled={option.disabled || disabledOption === option.label}
              >
                {option.icon}
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText error>
            {helperText ? helperText : !helperText && error?.message}
          </FormHelperText>
        </FormControl>
      )}
      control={control}
    />
  );
};
