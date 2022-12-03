import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'
import React from 'react';

function Navbar() {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile' className={(navData) => (navData.isActive ? style.active : 'none')} >Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' className={(navData) => (navData.isActive ? style.active : 'none')}>Messanges</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' className={(navData) => (navData.isActive ? style.active : 'none')}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' className={(navData) => (navData.isActive ? style.active : 'none')}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='settings' className={(navData) => (navData.isActive ? style.active : 'none')}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;