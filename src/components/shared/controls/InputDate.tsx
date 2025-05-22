import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import {
  DateValidationError,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";

type Props = {
  label?: string;
  maxDate?: string | Date;
  minDate?: string | Date;
  disablePast?: boolean;
  disableFuture?: boolean;
  value?: string | Date | null;
  onChange: (
    date: string | Date | null,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => void;
};

export const InputDate = ({
  label,
  maxDate,
  minDate,
  disablePast,
  disableFuture,
  value,
  onChange,
}: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        maxDate={maxDate}
        minDate={minDate}
        disablePast={disablePast}
        disableFuture={disableFuture}
      />
    </LocalizationProvider>
  );
};
