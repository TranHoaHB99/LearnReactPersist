import React from 'react';
import { ErrorMessage } from "@hookform/error-message";
import { FormFeedback } from 'reactstrap';

const ErrorMessagesField = ({errors,name}) => {
    const renderMessage=({message})=><FormFeedback>{message}</FormFeedback>
    return (
        <ErrorMessage
        errors={errors}
        name={name}
        render={renderMessage}
      />
    );
};

export default ErrorMessagesField;