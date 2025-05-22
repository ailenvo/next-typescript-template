import { Control, Controller } from "react-hook-form";
import { IconButton, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import HelpIcon from "@mui/icons-material/Help";
import TextEditor from "./TextEditor";

export interface FormInputTextProps {
  // required by validate
  name: string;
  control: Control<any, object>;
  errors: any;
  // more field
  title?: string;
  label?: string;
  disabled?: boolean;
  helperText?: any;
  rules?: any;
  infor?: string;
  value?: string;
  maxHeight?: string;
  minHeight?: string;
}

export const FormTextEditor = ({
  name,
  label,
  control,
  errors,
  rules,
  disabled,
  infor,
  title,
  value,
  minHeight = "400px",
  maxHeight,
}: FormInputTextProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        "&:hover .buttonInformation": { display: "block" },
      }}
    >
      <Controller
        name={name}
        rules={rules}
        render={({ field }) => (
          <TextEditor
            placeholder={label || ""}
            value={value ?? ""}
            onChange={field.onChange}
            toolbar={true}
          />
        )}
        control={control}
      />
      {infor && (
        <Tooltip title={infor} placement="top-end">
          <IconButton
            sx={{
              position: "absolute",
              display: "none",
              top: "-12px",
              right: "-10px",
              backgroundColor: "white",
              padding: "0px",
              width: "24px",
              height: "24px",
            }}
            className="buttonInformation"
          >
            <HelpIcon />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};
