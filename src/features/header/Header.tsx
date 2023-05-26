import React from 'react';
import notification from '../../assets/svg/notification.svg'
import './header.css'

export const Header = () => {
    return (
        <div className={'header-app'}>
            <div className={'header-app-container'}>
            <div className={'header-app__left-block'}>
                <div className={'left-block__square'}></div>
                <div className={'left-block__text'}>Проект</div>
            </div>
            <div className={'header-app__right-block'}>
                <img src={notification} alt="notification" className={'right-block__notification'}/>
                <div className={'right-block__avatar'}></div>
                <div className={'right-block__name-title'}>
                    <div className={'name-title__name'}>Иванов В.А.</div>
                    <div className={'name-title__title'}>Должность</div>
                </div>
            </div>
            </div>
        </div>

    )
};
