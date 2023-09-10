import { useRef } from "react";
import type { AriaTextFieldProps } from "react-aria";
import { useTextField } from "react-aria";

interface TextAreaFields extends AriaTextFieldProps {
  rows: number;
}

function TextArea(props: TextAreaFields) {
  const { label } = props;
  const ref = useRef(null);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(
      {
        ...props,
        inputElementType: "textarea",
      },
      ref
    );

  return (
    <div className="relative">
      <label {...labelProps} className="sr-only">
        {label}
        {props.isRequired && <span className="text-rose-400">*</span>}
      </label>
      <textarea
        {...inputProps}
        ref={ref}
        rows={props.rows}
        className="relative z-10 w-full resize-none rounded-md bg-white p-2 focus:outline-none focus:ring-2 focus:ring-sky-600"
        onChange={(e) => props.onChange?.(e.target.value)}
        required={props.isRequired}
        maxLength={props.maxLength}
        minLength={props.minLength}
      />
      {props.description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {props.description}
        </div>
      )}
      {props.errorMessage && props.validationState === "invalid" && (
        <>
          <div
            {...errorMessageProps}
            className="absolute -bottom-2 ml-2 mt-1 rounded-b-md bg-rose-200 px-2 text-xs text-rose-700"
          >
            {props.errorMessage}
          </div>
          <div className="mb-0.5" />
        </>
      )}
    </div>
  );
}

export default TextArea;
