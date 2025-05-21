import { merge } from "lodash";
import Card from "./Card";
import Lists from "./Lists";
import Paper from "./Paper";
import Input from "./Input";
import Button from "./Button";
import Tooltip from "./Tooltip";
import Typography from "./Typography";
import IconButton from "./IconButton";
import Autocomplete from "./Autocomplete";
import Select from "./Select";

export default function ComponentsOverrides(theme: any) {
  return merge(
    Card(theme),
    Lists(theme),
    Paper(),
    Input(theme),
    Button(theme),
    Tooltip(theme),
    Typography(theme),
    IconButton(theme),
    Autocomplete(theme),
    Select(theme),
    {
      MuiPickersCalendarHeader: {
        styleOverrides: {}
      }
    }
  );
}
