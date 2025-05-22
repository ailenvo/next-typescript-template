import MuiAlert from "@mui/material/Alert";
import { styled } from "@mui/styles";

export const Alert = styled(MuiAlert)(() => ({
  padding: "8px 24px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default Alert;
