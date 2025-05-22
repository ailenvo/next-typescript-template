import React, { useRef, useMemo, useState, RefObject, useEffect } from "react";
import CustomImage from "./CustomImage";
import Quill from "quill";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import { TextEditorQuillWrapper } from "./styles";
import { CSSObject } from "@mui/system";
import ReactQuill from "react-quill";

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  toolbar?: boolean;
  readOnly?: boolean;
  editorStyle?: CSSObject;
  quillRef?: RefObject<ReactQuill>;
  containerBorderRadius?: string;
}

const whitelist = ["Mulish", "serif", "monospace"];
const TextEditorQuill: React.FC<TextEditorProps> = ({
  value,
  onChange,
  placeholder,
  toolbar = false,
  readOnly = false,
  editorStyle = {},
  containerBorderRadius,
  quillRef,
}) => {
  const localQuillRef = useRef<ReactQuill>(null);
  const quillInstanceRef = quillRef || localQuillRef;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState({
    url: "",
    alt: "",
    width: "",
    height: "",
  });

  // Đăng ký CustomImage phía client
  useEffect(() => {
    Quill.register(CustomImage);

    const Font = Quill.import("formats/font");
    Font.whitelist = whitelist;
    Quill.register(Font, true);
  }, []);

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [
      {
        font: whitelist,
      },
    ],
    [{ align: [] }],
    ["clean"],
  ];

  const modules = useMemo(
    () => ({
      toolbar: toolbar
        ? {
            container: toolbarOptions,
            handlers: {
              image: () => setIsModalOpen(true),
            },
          }
        : false,
    }),
    []
  );

  const handleInsertImage = () => {
    if (quillInstanceRef.current) {
      let editor = quillInstanceRef.current.getEditor();
      editor.focus();
      let range = editor.getSelection();
      if (range) {
        editor.insertEmbed(range.index, "customImage", {
          url: image.url,
          alt: image.alt,
          width: image.width,
          height: image.height,
        });
        editor.setSelection({ index: range.index + 1, length: 0 });
      }
    }
    setIsModalOpen(false);
    setImage({ url: "", alt: "", width: "", height: "" });
  };

  return (
    <TextEditorQuillWrapper
      editorStyle={editorStyle}
      containerBorderRadius={containerBorderRadius}
    >
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={quillInstanceRef}
        className="quill-custom"
      />
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thêm hình ảnh
          </Typography>
          <TextField
            margin="dense"
            label="Url"
            fullWidth
            onChange={e => setImage({ ...image, url: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Alt"
            fullWidth
            onChange={e => setImage({ ...image, alt: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Chiều ngang"
            fullWidth
            onChange={e => setImage({ ...image, width: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Chiều dọc"
            fullWidth
            onChange={e => setImage({ ...image, height: e.target.value })}
          />
          <Box
            mt={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleInsertImage}
              sx={{ marginRight: "10px" }}
            >
              Thêm
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setIsModalOpen(false)}
            >
              Đóng
            </Button>
          </Box>
        </Box>
      </Modal>
    </TextEditorQuillWrapper>
  );
};

export default TextEditorQuill;
