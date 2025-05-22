import { FormControl, FormHelperText } from "@mui/material";
import Autocomplete, {
  AutocompleteInputChangeReason,
} from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { UIEventHandler } from "react";
import { FieldError } from "react-hook-form";
import { IValue } from "../../../models/common/model.type";

interface IProps {
  options: IValue[];
  placeholder?: string;
  onChange: (value: string | number) => void;
  value?: string | number;
  id?: string;
  onInputChange?: (text: string) => void;
  errors?: FieldError;
  onScroll?: UIEventHandler<HTMLUListElement>;
  maxHeight?: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
}

export default function InputAutocomplete(props: IProps) {
  const {
    options,
    placeholder,
    value,
    onChange,
    id = "multiple-limit-tags",
    onInputChange,
    errors,
    onScroll,
    maxHeight,
    label,
    disabled,
  } = props;

  const onChangeValue = (v: string | number) => {
    onChange(v);
  };

  const handleInputChange = async (
    e: React.SyntheticEvent<Element, Event>,
    text: string,
    reson: AutocompleteInputChangeReason
  ) => {
    if (reson === "input") onInputChange && onInputChange(text);
  };

  const selectedValue = options.find((f) => value === f.value);

  return (
    <FormControl sx={{ width: "100%" }}>
      <Autocomplete
        id={`${id}`}
        options={options}
        getOptionLabel={(option) => option.label}
        value={selectedValue || null}
        onChange={(e, v) => onChangeValue(v?.value)}
        onInputChange={handleInputChange}
        renderInput={(params) => (
          <TextField {...params} label={label} placeholder={placeholder} />
        )}
        sx={{ width: "100%" }}
        ListboxProps={{
          onScroll: onScroll,
          style: { maxHeight: maxHeight },
        }}
        disabled={disabled}
      />
      {errors?.message && (
        <FormHelperText error>{errors?.message}</FormHelperText>
      )}
    </FormControl>
  );
}
