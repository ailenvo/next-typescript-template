import { styled, CSSObject } from "@mui/material/styles";

interface TextEditorQuillWrapperProps {
  editorStyle?: CSSObject;
  containerBorderRadius?: string;
}

export const TextEditorQuillWrapper = styled(
  "div"
)<TextEditorQuillWrapperProps>(
  ({ theme, editorStyle, containerBorderRadius }) => ({
    ".quill-custom .ql-toolbar": {
      borderLeft: editorStyle?.border,
      borderRight: editorStyle?.border,
      borderTop: editorStyle?.border,
      borderTopLeftRadius: editorStyle?.borderRadius,
      borderTopRightRadius: editorStyle?.borderRadius,
      borderRadius: editorStyle?.borderRadius || "2px",
    },
    ".quill-custom .ql-container": {
      borderLeft: editorStyle?.border,
      borderRight: editorStyle?.border,
      borderBottom: editorStyle?.border,
      borderBottomLeftRadius:
        containerBorderRadius || editorStyle?.borderRadius,
      borderBottomRightRadius:
        containerBorderRadius || editorStyle?.borderRadius,
      borderTopLeftRadius: containerBorderRadius,
      borderTopRightRadius: containerBorderRadius,
      width: editorStyle?.width || "100%",
      height: editorStyle?.height ?? "auto",
      minHeight: editorStyle?.minHeight ?? 200,
    },
    '.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="Mulish"]::before,.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="Mulish"]::before':
      {
        content: '"Mulish"',
      },
    '.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="Unbounded"]::before,.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="Unbounded"]::before':
      {
        content: '"Unbounded"',
      },
  })
);
