import { useField } from "formik";
import React from "react";
import { Form, Label } from "semantic-ui-react";

/**
 * Props for the MyTextArea component.
 * @interface MyTextAreaProps
 * @property {string} placeholder - The placeholder text for the text area.
 * @property {string} name - The name of the form field.
 * @property {string} [label] - The label for the text area (optional).
 * @property {number} rows - The number of rows for the text area.
 */
interface Props {
  placeholder: string;
  name: string;
  label?: string;
  rows: number; 
}

/**
 * A customized text area component using Formik and Semantic UI React.
 * @function MyTextArea
 * @param {MyTextAreaProps} props - The properties of the MyTextArea component.
 * @returns {JSX.Element} - The rendered MyTextArea component.
 */
function MyTextArea(props: Props) {
  const [field, meta] = useField(props.name);
  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label>{props.label}</label>
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </Form.Field>
  );
}

export default MyTextArea;
