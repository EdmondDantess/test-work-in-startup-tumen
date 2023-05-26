import React from 'react';
import arrowUp from '../../../assets/svg/arrowUp.svg';
import arrowDown from '../../../assets/svg/arrowDown.svg';

type GenerateCategoryRowsType = {
  c: { title: string; status: boolean };
  showTasksHandler: (index: number) => void;
  i: number;
};

export const GenerateCategoryRows: React.FC<GenerateCategoryRowsType> = ({
  c,
  i,
  showTasksHandler,
}) => {
  return (
    <tr className={'table__category'} onClick={() => showTasksHandler(i)}>
      <td className={'table__category'} colSpan={13}>
        <span>{c.title}</span>
        <img src={c.status ? arrowUp : arrowDown} alt="arrow" />
      </td>
    </tr>
  );
};
