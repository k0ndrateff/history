import React from 'react';

import TrumpetImage from '../img/trumpet.svg';

export default function Header(props) {
    return (
        <div className="bg-red-600 w-full">
            <div className='georg'></div>
            <section class="h-screen px-12 sm:px-24 flex items-center relative">
                <div class="grid grid-cols-12 gap-6 ">
                <div class="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xxl:col-span-12">
                    <div class="w-full">
                        <img width='200' src={TrumpetImage} alt='' />
                        <h1 class="text-7xl sm:text-8xl lg:text-8xl xl:text-9xl text-white font-bold my-8">Музыка<br />
                            <span class='text-blue-400'>Войны</span></h1>
                        <p class="text-2xl text-white font-semibold ">Проект о мелодиях<br /> 
                        Великой Отечественной Войны</p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
}