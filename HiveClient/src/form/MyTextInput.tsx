import { useField } from "formik";
import React from "react";
import { Form, Label } from "semantic-ui-react";

/**
 * Props for the MyTextInput component.
 * @interface MyTextInputProps
 * @property {string} placeholder - The placeholder text for the text input.
 * @property {string} name - The name of the form field.
 * @property {string} [label] - The label for the text input (optional).
 * @property {string} [type] - The type of the input (e.g., "text", "password").
 */
interface Props {
  placeholder: string;
  name: string;
  label?: string;
  type?: string;
}

/**
 * A customized text input component using Formik and Semantic UI React.
 * @function MyTextInput
 * @param {MyTextInputProps} props - The properties of the MyTextInput component.
 * @returns {JSX.Element} - The rendered MyTextInput component.
 */
function MyTextInput(props: Props) {
  const [field, meta] = useField(props.name);
  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label>{props.label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </Form.Field>
  );
}

export default MyTextInput;
