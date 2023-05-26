import React, {ChangeEvent, useState} from 'react';
import './tableCell.css'
import {statusWork} from '../table/data';
import {Simulate} from 'react-dom/test-utils';
import select = Simulate.select;

type TableCellType = {
    value: string
    isHeader?: boolean
}


export const TableCell: React.FC<TableCellType> = ({value, isHeader}) => {
    const [status, SetStatus] = useState(statusWork[Math.floor(Math.random() * 3)])

    const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        e.target.value && SetStatus(e.target.value)
    }

    return (
        <td className={`table__cell  ${isHeader && 'table__cell-header'}`}>
            {
                statusWork.includes(value)
                    ? <select value={status} className={'cell__selector'}
                              style={{
                                  backgroundColor: status === 'На паузе'
                                      ? '#FFCCDD'
                                      : '#F5F5F5'
                              }}
                              onChange={(e) => handleChangeSelect(e)}

                    >
                        {statusWork.map((s, i) => {
                            return (
                                <option id={s} key={i}
                                        value={s}
                                >{s}</option>
                            )
                        })}
                    </select>
                    : value
            }
        </td>
    );
}
