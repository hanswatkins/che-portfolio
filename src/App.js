import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ImgCarousel from './components/ImgCarousel';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header>
        <NavBar />
      </header>

      <body></body>

      <footer>
        <Footer />
      </footer>

      <Routes>
        <Route path='/' element={<ImgCarousel />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
