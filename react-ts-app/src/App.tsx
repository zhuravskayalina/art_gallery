import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import './App.scss';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
