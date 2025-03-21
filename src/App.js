import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Service from './components/service/Service';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Service />
            <Footer />
        </>
    );
};

export default App;