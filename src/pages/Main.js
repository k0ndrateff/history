import React from 'react';

import Header from '../components/Header';
import Article from '../components/Article';
import Footer from '../components/Footer';

export default function Main(props) {
    return (
        <div>
            <Header />
            <Article />
            <Footer />
        </div>
    );
}