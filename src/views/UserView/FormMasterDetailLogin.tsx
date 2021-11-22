import { FormInput, FormSwitch, Widget, MasterContext, FormSubmitButton, FormSelect,  } from '@digital/ui';
import React, { useContext, useEffect, useState } from 'react';

import { updateValidationSchema, validationSchema } from './schemas';

interface FormUserProps {
  dateTime: string;
  mes?: string;
}

const FormUser = ({ dateTime }: FormUserProps) => {
  const { selectedItem } = useContext(MasterContext);

  const listItems = [{
    value: 1,
    text: 'Administrador',
  }, {
    value: 2,
    text: 'Desenvolvedor'
  }, {
    value: 3,
    text: 'Analista',
  }, {
    value: 4,
    text: 'DBA'
  }]

  return (
    <Widget actions={[<FormSubmitButton />]}>
      <h1>{dateTime}</h1>
      <FormInput disabled={!!selectedItem} label="Código Usuário" name="UserCode" />
      <FormInput label="Nome" name="Name" />
      <FormInput label="E-mail" type="email" name="Email" />
      {selectedItem && <FormSwitch label="Ativado?" name="Active" />}
      <FormSelect mode="multiple" options={listItems} label="Permissão" name="Permission" />
      <FormInput autoComplete="new-password" label="Senha" type="password" name="Password" />
      <FormInput label="Confirme a Senha" type="password" name="ConfirmPassword" />
    </Widget>
  );
};

export default FormUser;
