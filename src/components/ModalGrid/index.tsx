import { DataGrid, notification } from '@digital/ui';
import { FormContextProps } from '@digital/ui/lib/contexts/FormContext';
import { Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal/Modal';
import React from 'react';
import { ColDef, SelectionChangedEvent } from 'ag-grid-community';
import { ColumnsProps, dataGrid } from '../utils';
import moment from 'moment';

// import { Container } from './styles';
interface ModalGridProps extends ModalProps {
  onClose: (value: boolean) => void;
  formProps: FormContextProps;
}

const ModalGrid = ({ onClose, formProps, ...respProps }: ModalGridProps) => {

  const onSelect = (e: SelectionChangedEvent) => {
    const selectedLine = e.api.getSelectedRows()[0] as ColumnsProps;

    formProps.formProps!.setValues({
      ...formProps.formProps!.values,
      NameTemp: selectedLine.templateName,
      TipoTemp: selectedLine.tipoTemp,
      DataExp: moment(selectedLine.dataExp, 'DD/MM/YYYY'),
      LiderTemp: selectedLine.liderTemp,
      DescTemp: selectedLine.descTemp,
    })

    onClose(false);
  }

  const columnDefs: ColDef[] = [
    { field: 'templateName', headerName: 'Nome Template' },
    { field: 'tipoTemp', headerName: 'Tipo Template' },
    { field: 'dataExp', headerName: 'Data Expiração' },
    { field: 'liderTemp', headerName: 'Lider' },
    { field: 'descTemp', headerName: 'Descrição', hide: true }
  ]

  return (
    <Modal onCancel={() => onClose(false)} {...respProps} >
      <div className="ag-theme-balham" style={{ height: 300 }}>
        <DataGrid
          columnDefs={columnDefs}
          rowData={dataGrid}
          rowSelection='single'
          onSelectionChanged={e => onSelect(e)}
        />
      </div>
    </Modal>
  );
}

export default ModalGrid;
