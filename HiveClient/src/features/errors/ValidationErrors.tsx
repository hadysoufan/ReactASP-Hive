import React from "react";
import { Message } from "semantic-ui-react";

/**
 * Props for the ValidationErrors component.
 * @interface Props
 * @property {any} errors - The array of validation errors to be displayed.
 */
interface Props {
  errors: any;
}

/**
 * A React component for displaying validation errors in a Semantic UI Message.
 * @function ValidationErrors
 * @param {Props} props - The properties of the ValidationErrors component.
 * @returns {JSX.Element} - The rendered ValidationErrors component.
 */
function ValidationErrors({ errors }: Props): JSX.Element {
  return (
    <Message error>
      {Array.isArray(errors) && errors.length > 0 && (
        <Message.List>
          {errors.map((err: any, i: any) => (
            <Message.Item key={i}>{err}</Message.Item>
          ))}
        </Message.List>
      )}
    </Message>
  );
}

export default ValidationErrors;
