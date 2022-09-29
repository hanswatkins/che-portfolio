import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ImgCarousel from './components/ImgCarousel';

function App() {
  return (
    <div className='App'>
      <header>
        <NavBar />
      </header>

      <body>
        <ImgCarousel />
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
