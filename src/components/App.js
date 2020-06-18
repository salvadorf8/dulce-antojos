import './app.css';

import React from 'react';

import Navigationbar from './NavigationBar';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navigationbar />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default App;
