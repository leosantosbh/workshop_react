import React, { useState } from 'react';
import { Col, FormCheckbox, FormDatePicker, FormInput, FormMonthPicker, FormRadio, FormTextArea, FormTimePicker, Widget, Row, ButtonCustom } from '@digital/ui'
import { FormContextProps } from '@digital/ui/lib/contexts/FormContext';
import ModalGrid from 'src/components/ModalGrid';
import { Modal } from 'antd';

interface FormContextViewProps {
  formProps: FormContextProps;
}

interface InputsProps {
  id: number;
  type: 'text' | 'number';
  span: 6 | 8 | 10 | 12;
  name: string;
  label: string;
  lenght?: number;
}

const FormContextView: React.FC<FormContextViewProps> = ({ formProps }) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const optionsCheckBox = [{
    value: 1,
    text: 'Diretor',
  }, {
    value: 2,
    text: 'Gerente'
  }, {
    value: 3,
    text: 'Gestor'
  }, {
    value: 4,
    text: 'Lider'
  }]

  const optionsRadio = [{
    value: 1,
    text: 'Opcional',
  }, {
    value: 2,
    text: 'Obrigatório'
  }]

  const inputs: InputsProps[] = [{
    id: 1,
    label: 'Input Text 1',
    name: 'InputText1',
    span: 10,
    type: 'text',
    lenght: 50
  },{
    id: 2,
    label: 'Input Number 2',
    name: 'InputNumber2',
    span: 6,
    type: 'number',
  },{
    id: 21,
    label: 'Input Number 3',
    name: 'InputNumber3',
    span: 8,
    type: 'number'
  },{
    id: 17,
    label: 'Input Text 4',
    name: 'InputText4',
    span: 12,
    type: 'text',
    lenght: 600
  }, {
    id: 99,
    label: 'input novo',
    type: 'text',
    name: 'inputnovo',
    span: 6
  }]

  return (
    <>
    <Modal />
    <Widget title="Fomulário de Teste">
      <Row>
        <FormInput label="Nome Documento" name="DocNumber" span={6} />
        <FormInput type="number" label="Série Documento" name="Serie" span={6} />
        <FormDatePicker label="Data Entrega" format="DD/MM/YYYY" name="DataEntrega" span={4} />
        <FormMonthPicker label="Mes Renovação" format="MM/YYYY" name="MesRenovação" span={4} />
        <FormTimePicker label="Hora Finalizacao" name="HoraFinalizacao" span={4} />
        <FormTextArea label="Texto Longo" maxLength={800} name="TextoLongo" autosize={{ minRows: 4, maxRows: 8 }} />
        <label style={{ float: 'right', marginRight: '10px', marginTop: '-20px' }}>{formProps.formProps && formProps.formProps.values.TextoLongo ? formProps.formProps.values.TextoLongo.length : 0}/800</label>

        <FormCheckbox options={optionsCheckBox} label="Check Box" name="checkBox" />
        <FormRadio options={optionsRadio} label="Radio" name="Radio" />
      </Row>

      <Row>
        {inputs.map(item => {
          if (item.type === 'number') {
            return (
              <FormInput key={item.id} type={item.type} name={item.name} label={item.label} span={item.span} />
            )
          }
          return (
            <React.Fragment key={item.id}>
              <FormInput name={item.name} label={item.label} span={item.span} maxLength={item.lenght} />
              {item.lenght && (
                <label style={{ float: 'right', marginRight: '10px', marginTop: '-20px' }}>{formProps.formProps && formProps.formProps.values[item.name] ? formProps.formProps.values[item.name].length : 0}/{item.lenght}</label>
              )}
            </React.Fragment>
          )
        })}
      </Row>

      <Row style={{ margin: 5 }}>
        <ButtonCustom name="Selecione um template..." iconname="arrows-circled_up" onClick={() => setVisibleModal(true) } />
      </Row>
      <Row>
        <FormInput name="NameTemp" label="Nome Template" span={8} disabled />
        <FormInput name="TipoTemp" label="Tipo Template" span={8} disabled />
        <Col span={12}>
          <FormDatePicker name="DataExp" format="DD/MM/YYYY" label="Data Expiração" span={4} disabled />
          <FormInput name="LiderTemp" label="Liderança" span={4} disabled />
        </Col>
        <FormTextArea name="DescTemp" label="Descrição" span={8} autosize={{ minRows: 2, maxRows: 4 }} disabled />
      </Row>
      {visibleModal && <ModalGrid centered formProps={formProps} width={900} footer={null} title="Selecione um item:" visible={visibleModal} onClose={setVisibleModal} />}
    </Widget>
    </>
  );
}

export default FormContextView;
