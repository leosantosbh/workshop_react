import { DataGrid } from '@digital/ui';
import { Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal/Modal';
import React from 'react';
import { ColDef, SelectionChangedEvent } from 'ag-grid-community';
import { dataGrid } from '../utils';

interface ModalGridProps extends ModalProps {
  onClose: (value: boolean) => void;
}

const ModalGrid: React.FC<ModalGridProps> = ({ onClose, ...respProps }) => {

  const onSelect = (e: SelectionChangedEvent) => {
    console.log(e);
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
