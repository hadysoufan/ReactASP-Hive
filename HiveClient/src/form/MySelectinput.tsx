import { useField } from "formik";
import React from "react";
import { Form, Label, Select } from "semantic-ui-react";

/**
 * Props for the MySelectInput component.
 * @interface MySelectInputProps
 * @property {string} placeholder - The placeholder text for the select input.
 * @property {string} name - The name of the form field.
 * @property {string} [label] - The label for the select input (optional).
 * @property {any[]} options - The array of options for the select input.
 */
interface Props {
  placeholder: string;
  name: string;
  label?: string;
  options: any;
}
/**
 * A customized select input component using Formik and Semantic UI React.
 * @function MySelectInput
 * @param {MySelectInputProps} props - The properties of the MySelectInput component.
 * @returns {JSX.Element} - The rendered MySelectInput component.
 */

function MySelectInput(props: Props) {
  const [field, meta, helpers] = useField(props.name);
  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label>{props.label}</label>
      <Select
        clearable
        options={props.options}
        value={field.value || null}
        onChange={(e, d) => helpers.setValue(d.value)}
        onBlur={() => helpers.setTouched(true)}
        placeholder={props.placeholder}
      
      />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </Form.Field>
  );
}

export default MySelectInput;
