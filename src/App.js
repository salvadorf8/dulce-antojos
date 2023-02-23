import Navigationbar from './components/NavigationBar';
import Content from './components/Content';
import Footer from './components/Footer';
import NewTrial from './components/NewTrial';

import './app.css';

const App = () => {
    return (
        <div>
            <NewTrial />
            {/* <Navigationbar /> */}
            <Content />
            <Footer />
        </div>
    );
};

export default App;
