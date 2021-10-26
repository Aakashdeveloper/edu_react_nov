import React from 'react';
import Header from './header';
import Footer from './footer';

const Home = () => {
    return(
        <React.Fragment>
            <Header/>
            <h1>My React App</h1>
            <h2>Edureka</h2>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;