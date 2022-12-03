import style from './Header.module.css'
import React from 'react';
function Header() {
    return (
        <header className={style.header}>
            <img src="https://uploads.turbologo.com/uploads/design/hq_preview_image/4551835/draw_svg20211224-8647-1vc0v11.svg.png" />
        </header>
    )
}

export default Header;