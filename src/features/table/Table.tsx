import React, {useMemo, useState} from 'react';
import {TableHeader} from '../tableHeader/TableHeader';
import './table.css'
import {dataForTableCategory, generateData} from './data';
import {GenerateTableRows} from './GenerateTableRows/GenerateTableRows';
import {GenerateCategoryRows} from './GenerateCategoryRows/GenerateCategoryRows';


export const Table = () => {
    const [category, setCategory] = useState(dataForTableCategory)


    const memoizedData = useMemo(() => {
        return generateData()
    }, [])


    const showTasksHandler = (index: number) => {
        let changedCategory = category.map((c) => {
            return {
                ...c, status: false
            }
        })
        changedCategory[index] = {title: category[index].title, status: !category[index].status}
        setCategory([...changedCategory])
    }


    return (
        <table className={'table'}>
            <TableHeader/>
            <tbody>
            {
                category.map((c, i) => {
                    return (
                        <React.Fragment key={i}>
                            <GenerateCategoryRows c={c} i={i} showTasksHandler={showTasksHandler}/>
                            <GenerateTableRows c={c} memoizedData={memoizedData}/>
                        </React.Fragment>
                    )
                })
            }
            </tbody>
        </table>
    );
}
