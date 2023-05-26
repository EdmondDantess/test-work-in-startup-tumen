import React from 'react';
import { TableRow } from '../../tableRow/TableRow';

type GenerateTableRowsType = {
  c: { title: string; status: boolean };
  memoizedData: string[][];
};

export const GenerateTableRows: React.FC<GenerateTableRowsType> = ({
  c,
  memoizedData,
}) => {
  return (
    <div
      className={c.status ? 'table_show' : 'table_close'}
      style={{
        maxHeight: c.status ? `${(memoizedData.length + 1) * 80}px` : 0,
      }}
    >
      {memoizedData.map((_d, i) => {
        return <TableRow data={memoizedData[i]} key={i} />;
      })}
    </div>
  );
};
