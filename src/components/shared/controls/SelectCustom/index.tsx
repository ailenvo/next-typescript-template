import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
  Theme,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { IValue } from "../../../../models/common/model.type";

interface SelectCustomProps {
  value?: string | number;
  onChange: (value: any) => void;
  options: Array<IValue>;
  label?: string;
  className?: string;
  sx?: SxProps<Theme>;
  size?: "medium" | "small" | "large" | "xsmall";
  variant?: "filled" | "outlined" | "standard";
}

export default function SelectCustom(props: SelectCustomProps) {
  const {
    value,
    onChange,
    options,
    label,
    className = "",
    sx,
    size = "medium",
    variant = "outlined",
  } = props;
  return (
    <FormControl fullWidth>
      <InputLabel id="simple-select-label">{label}</InputLabel>
      <Select
        sx={sx}
        size={size}
        variant={variant}
        labelId="simple-select-label"
        id="simple-select"
        value={value}
        label={label}
        onChange={onChange}
        className={`${className}`}
        IconComponent={ExpandLessIcon}
      >
        {options.map((value, index) => (
          <MenuItem value={value.value} key={index}>
            {value.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
