import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom"; // Import corrects
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Assurance from './pages/Assurance';
import Atelier from './pages/Atelier';
import Boutiques from './pages/Boutiques';
import Police from './pages/Police';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Ordinateur from './pages/Ordinateur';
import Electro from './pages/Electro'
import Smartphone from './pages/Smartphone';
import Seulproduit from './pages/Seulproduit';
import Cart from './components/cart';
import DemanderC from './pages/Demander_c';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        
          <Route path="/" element={<div><Header /><Home /><Footer /></div>} />
          <Route path="/accueil" element={<Navigate to="/" />} />
          <Route path="/atelier" element={<Atelier />} />
          <Route path="/boutiques" element={<Boutiques />} />
          <Route path="/assurance" element={<Assurance />} />
          <Route path="/police" element={<Police />} />
          <Route path="/connecte" element={<div><Login /></div>} />
          <Route path="/ordinateur" element={<Ordinateur />} />
          <Route path="/smart" element={<Electro />} />
          <Route path="/elect" element={<Smartphone />} />
          <Route path='/produit/:id' element={<Seulproduit />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cree_compte" element={<DemanderC/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
