import './App.css';
import NavBar from '../components/NavBar/NavBar'
import Header from '../components/Header/Header'
import Technologies from '../components/Technologies/Technologies'
import Portfolio from '../components/Portfolio/Portfolio'
import Footer from '../components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Technologies />
      <Portfolio />
      <Footer />
    </div>
  );
}
