import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';
import { useController } from 'react-hook-form';
import ErrorMessagesField from '../ErrorMessageField';
const InputField = ({
  control,
  name,
  label,
  type,
  placeholder,
  disabled,
  errors,
}) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: 'This is required field' },
    defaultValue: '',
  });
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        {...inputProps}
        ref={ref}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        invalid={invalid}
      />
      <ErrorMessagesField errors={errors} name={name} />
    </FormGroup>
  );
};
// InputField.propTypes = {
//   name: PropTypes.string,
//   type: PropTypes.string,
//   label: PropTypes.string,
//   placeholder: PropTypes.string,
//   disabled: PropTypes.bool,
// };

// InputField.defaultProps = {
//   name: "",
//   type: "text",
//   label: "",
//   placeholder: "",
//   disabled: false,
// };
export default InputField;
