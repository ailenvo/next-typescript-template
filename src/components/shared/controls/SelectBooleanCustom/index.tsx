import { Button, ClickAwayListener, PopoverOrigin } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PopoverWrapper, Wrapper } from "./styles";
import ErrorIcon from "@mui/icons-material/Error";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { IValue } from "../../../../models/common/model.type";

interface SelectCustomProps {
  options: IValue[];
  onChange: (value: any) => void;
  placeholder: string;
  required?: boolean;
  name: string;
  errors?: any;
  classname?: string;
  onFocus?: () => void;
  defaultValue?: any;
  popoverWidth?: number;
  endIcon?: string;
  padding?: string | number;
  value: any;
  disabled?: boolean;
  anchorOrigin?: PopoverOrigin;
}

export default function SelectBooleanCustom(props: SelectCustomProps) {
  const {
    onChange,
    options,
    placeholder,
    required,
    errors,
    name = "",
    classname = "",
    onFocus,
    defaultValue = "",
    popoverWidth,
    endIcon,
    padding,
    value,
    disabled,
    anchorOrigin,
  } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const boxRef = React.useRef<any | null>(null);

  useEffect(() => {
    if (typeof defaultValue === "string") {
      if (!value && defaultValue && defaultValue.length > 0) {
        onChange(defaultValue);
      }
    } else if (typeof defaultValue === "number") {
      if (!value && defaultValue !== undefined) {
        onChange(defaultValue);
      }
    }
  }, [defaultValue]);

  useEffect(() => {
    if (typeof value === "string") {
      if (value != null && value !== undefined) {
        onChange(value);
      }
    } else if (typeof value === "number") {
      if (value !== undefined) {
        onChange(value);
      }
    }
  }, [value]);

  const onClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (valueData: string) => {
    if (valueData !== value) {
      onChange(valueData);
      onClose();
    }
  };

  const onOpenSelect = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!disabled) {
      setAnchorEl(event.currentTarget);
    }
  };

  const renderText = (valueData: any) => {
    const result = options.find((data) => data.value === valueData);
    if (result) {
      return `${result?.label}`;
    }
  };

  return (
    <Wrapper
      className={classname}
      onFocus={onFocus}
      endIcon={endIcon}
      disabled={disabled}
    >
      <div
        className={`select-box ${
          errors && !!errors[name] ? "select-box-error" : ""
        }`}
        style={{ padding: padding }}
        onClick={(e) => onOpenSelect(e)}
        ref={boxRef}
      >
        <div className="flex-between-align-center">
          {typeof value === "string" && (
            <>
              {value !== undefined && value.length > 0 ? (
                <p className="select-selected-text">{renderText(value)}</p>
              ) : (
                <p className="select-placeholder">
                  {placeholder}
                  {required && <span>*</span>}
                </p>
              )}
            </>
          )}
          {(typeof value === "number" || typeof value === "boolean") && (
            <>
              {value !== undefined ? (
                <p className="select-selected-text">{renderText(value)}</p>
              ) : (
                <p className="select-placeholder">
                  {placeholder}
                  {required && <span>*</span>}
                </p>
              )}
            </>
          )}
          <ExpandLessIcon
            width={10}
            height={5}
            className={`select-arrow ${
              Boolean(anchorEl) && !!anchorEl ? "active" : ""
            }`}
          />
        </div>
      </div>
      {errors && errors[name]?.message && (
        <div className="error-text flex-start-align-center">
          <ErrorIcon width={14} height={14} />
          <p>{errors[name]?.message}</p>
        </div>
      )}
      <PopoverWrapper
        open={!!anchorEl}
        anchorEl={anchorEl}
        anchorOrigin={
          anchorOrigin
            ? anchorOrigin
            : {
                vertical: "bottom",
                horizontal: "left",
              }
        }
        boxref={boxRef}
        popover_width={popoverWidth}
      >
        <ClickAwayListener onClickAway={() => onClose()}>
          <ul className="select-list scrollbar-small">
            {options.map((item) => (
              <li
                key={item.value}
                className={`${value === item.value ? "active" : ""}`}
              >
                <Button onClick={() => handleClick(item.value)}>
                  <p>{`${item.label}`}</p>
                </Button>
              </li>
            ))}
          </ul>
        </ClickAwayListener>
      </PopoverWrapper>
    </Wrapper>
  );
}
