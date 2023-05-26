import React from 'react';
import { TableCell } from '../tableCell/TableCell';
import './tableRow.css';

type TableRowType = {
  data: string[];
  isHeader?: boolean
}

export const TableRow: React.FC<TableRowType> = ({ data, isHeader }) => {

  return (
    <tr className={'table__row'} style={{
      backgroundColor: data.includes('Вне очереди')
        ? '#71FACA'
        : '',
    }}>
      {
        data.map((_d: string | number, i) => {
          return <TableCell value={data[i]} key={i} isHeader={isHeader} />;
        })
      }
    </tr>
  );
};
