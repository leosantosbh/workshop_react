import React from 'react';
import { GridView, SimpleView, Widget } from '@digital/ui'

const FormView: React.FC = () => {

  return (
    <SimpleView>
      <GridView noform>
        <Widget>
          <h1>Formulário de Documento</h1>
        </Widget>
      </GridView>
    </SimpleView>
  );
}

export default FormView;
