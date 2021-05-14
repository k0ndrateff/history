import React from 'react';

export default function Footer(props) {
    return (
        <footer className='bg-red-600'>
            <div className='container mx-auto'>
                <h3 className='text-2xl mt-10 text-white italic'>
                    Дизайн, разработка, подготовка материала: <a class='hover:text-blue-400' href='http://gimnaz.ru/lyudi/ucheniki/10-ya-parallel-2013-2014/10b-klass/item/6436-belov-maksim'>Кондратьев Егор</a> и <a class='hover:text-blue-400' href='http://gimnaz.ru/lyudi/ucheniki/10-ya-parallel-2013-2014/10b-klass/item/6442-kondratev-egor'>Белов Максим</a>.
                    Создано с любовью в 2021 году. <a href='https://disk.yandex.ru/i/XUEafjR6GTinWw' class='underline hover:text-blue-400'>Ресурсы</a>
                </h3>
            </div>
        </footer>
    );
}