import React from 'react';

import TrumpetImage from '../img/trumpet.svg';
import PianoImage from '../img/piano.svg';

export default function Header(props) {
    return (
        <div className="header">
            <img src={TrumpetImage} className='left' alt="" />
            <img src={PianoImage} className='right' alt="" />
            <h1>Музыка в Великую Отечественную Войну</h1>
            <h2>От маршевых мелодий до симфоний</h2> 
        </div>
    );
}