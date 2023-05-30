import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import './App.scss';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import FormPage from './components/FormPage/FormPage';
import Exhibition from './components/Exhibition/Exhibition';
import RickAndMorty from './components/Exhibition/RickMorty/RickAndMorty';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<FormPage />} />
        <Route
          path="/exhibitions"
          element={
            <Exhibition>
              <RickAndMorty />
            </Exhibition>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
