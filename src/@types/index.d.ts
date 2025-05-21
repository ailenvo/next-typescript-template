import "@mui/material/TextField";
import "@mui/material/InputBase";
import "@mui/material/Button";

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    large: true;
    xsmall: true;
  }
}

declare module "@mui/material/InputBase" {
  interface InputBasePropsSizeOverrides {
    large: true;
    xsmall: true;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    xsmall: true;
  }
}

declare module "*.svg" {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
