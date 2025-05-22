import { Snackbar, AlertColor, AlertTitle } from "@mui/material";
import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";
import Alert from "./ToastStyles";
import ErrorIcon from "@mui/icons-material/Error";
import ReportIcon from "@mui/icons-material/Report";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface INotification {
  message: string;
  type?: AlertColor;
}

//handle error
const handleErrorSubject = new BehaviorSubject<INotification | null>(null);

export const toggleMessage = (value: INotification) => {
  handleErrorSubject.next(value);
};

export default function Toast() {
  const [notify, setNotify] = useState<INotification & { isOpen: boolean }>({
    isOpen: false,
    message: "",
    type: "success",
  });

  //#region handle error
  useEffect(() => {
    const subscribe = handleErrorSubject.subscribe((noti) => {
      if (noti && noti.message) {
        setNotify({
          isOpen: true,
          message: noti.message,
          type: noti.type || "success",
        });
      }
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, []);

  const handleClose = (event: any) => {
    setNotify((pre) => {
      return {
        ...pre,
        isOpen: false,
      };
    });
  };
  const renderIcon = () => {
    switch (notify.type) {
      case "error":
        return <ErrorIcon />;
      case "warning":
        return <ReportIcon />;
      case "info":
        return <LiveHelpIcon />;
      default:
        return <CheckCircleIcon />;
    }
  };

  return (
    <Snackbar
      open={notify.isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert severity={notify.type} onClose={handleClose} icon={renderIcon()}>
        <AlertTitle>
          <span className="title">{notify.message}</span>
        </AlertTitle>
      </Alert>
    </Snackbar>
  );
}
