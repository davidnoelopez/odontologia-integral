import { useRef } from "react";
import type { AriaTextFieldProps } from "react-aria";
import { useTextField } from "react-aria";

function TextField(props: AriaTextFieldProps) {
  const { label } = props;
  const ref = useRef(null);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  return (
    <div className="relative flex flex-col gap-2">
      <label {...labelProps} className="sr-only" htmlFor={inputProps.id}>
        {label}
        {props.isRequired && <span className="text-rose-400">*</span>}
      </label>
      <input
        {...inputProps}
        ref={ref}
        className="z-10 rounded-md bg-white p-2 focus:outline-none focus:ring-2 focus:ring-sky-600"
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
            className="absolute -bottom-1.5 ml-2 mt-1 rounded-b-md bg-rose-200 px-2 text-xs text-rose-700"
          >
            {props.errorMessage}
          </div>
          <div className="mb-0.5" />
        </>
      )}
    </div>
  );
}

export default TextField;
