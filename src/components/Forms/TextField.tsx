import { useRef } from "react";
import type { AriaTextFieldProps } from "react-aria";
import { useTextField } from "react-aria";

function TextField(props: AriaTextFieldProps) {
  const { label } = props;
  const ref = useRef(null);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  return (
    <div>
      <label
        {...labelProps}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
        {props.isRequired && <span className="text-rose-400">*</span>}
      </label>
      <input
        {...inputProps}
        ref={ref}
        className="focus:border-primary-500 focus:ring-primary-500 dark:shadow-sm-light dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500"
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
        <div
          {...errorMessageProps}
          className="absolute ml-2 mt-1 text-sm text-rose-400"
        >
          {props.errorMessage}
        </div>
      )}
    </div>
  );
}

export default TextField;
