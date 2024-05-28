import React from "react";
import './Boutiques.css'
import smartphone from '../images/smartphone.png'
import ord from '../images/ordinateur.png'
import elect from '../images/electronique.png'
import { Link } from 'react-router-dom';
class Boutiques extends React.Component {
  openNav() {
    // Fonction openNav à implémenter selon vos besoins
} 
  render() {
    return (
  
  <div className="wrapper658">
  <div>
    <p className="p1">Ordinateur</p>
    <img src={ord} alt="" className="imageB" />
    <br/>
    <div className="centerB">
      <Link to="/ordinateur">
    <button type="button" className="btn btn-success btn-rounded" data-mdb-ripple-init="">Parcourir les produits</button>
    </Link>
    </div>
     </div>
  <div>
    <p className="p1">Smart Phone</p>
    <img src={smartphone} alt="" className="imageB" /><br/>
    <div className="centerB2">
    <Link to="/smart">
    <button type="button" className="btn btn-success btn-rounded" data-mdb-ripple-init="">Parcourir les produits</button>
   </Link> </div>
  </div>
  <div>
    <p className="p1">Electroménager</p>
  <img src={elect} alt="" className="imageB" />
  <br/>
  <div className="centerB3"> 
  <Link to="/elect">
  <button type="button" className="btn btn-success btn-rounded" data-mdb-ripple-init="">Parcourir les produits</button>
  </Link>
  </div>
  </div>
</div>

    );
  }
}

export default Boutiques;
