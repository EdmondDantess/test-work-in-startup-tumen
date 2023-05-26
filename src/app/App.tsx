import React from 'react';
import './App.css';
import {Table} from '../features/table/Table';
import {Header} from '../features/header/Header';
import squares from '../assets/svg/squares.svg'

function App() {
    return <div className="App">
        <Header/>
        <div className={'App__body'}>
            <div className={'App__body-container'}>
                <div className={'App__body_left'}>
                    <div className={'body__square'}>
                        <img src={squares} alt="squares"/>
                    </div>
                </div>
                <div className={'App__body_right'}>

                    <div className={'App__title'}><span>Задачи</span></div>

                    <Table/>
                </div>
            </div>
        </div>

    </div>;
}

export default App;
