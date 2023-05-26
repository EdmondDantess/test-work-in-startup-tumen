import React from 'react';
import './tableHeader.css';
import { dataForHeader } from './data';
import { TableRow } from '../tableRow/TableRow';

export const TableHeader = () => {
  return (
    <thead>
    <TableRow data={dataForHeader}
              isHeader
    />
    </thead>
  );
};

