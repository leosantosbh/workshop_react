import React from 'react';
import { FormContext, Form, GridView, SimpleView, FormResetButton, FormSubmitButton } from '@digital/ui'
import FormContextView from './FormContext';

const FormView: React.FC = () => {

  return (
    <SimpleView>
      <GridView noform>
        <Form onSubmit={values => console.log(values)} actions={[
          <FormResetButton key="reset" />,
          <FormSubmitButton key="submit" />
        ]}>
          <FormContext.Consumer>
            {formProps => (
              formProps && <FormContextView formProps={formProps} />
            )}
          </ FormContext.Consumer>
        </ Form>
      </GridView>
    </SimpleView>
  );
}

export default FormView;
