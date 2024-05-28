import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const cart = useSelector(state => state.handleCart);
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div>
      <div className="banner_bg_main">
        <div className="container">
          <div className="header_section_top">
            <div className="row">
              <div className="col-sm-12">
                <div className="custom_menu">
                  <ul>
                    <li><Link to="accueil">Accueil</Link></li>
                    <li><Link to="boutiques">Boutiques</Link></li>
                    <li><Link to="atelier">Atelier de réparation</Link></li>
                    <li><Link to="assurance">Assurance</Link></li>
                    <li><Link to="police">Quoi de neuf ?</Link></li>
                    <NavLink to="/cart" activeClassName="active">
                      <div>
                        <MdShoppingCart style={{ fontSize: 24 }} />
                        <span>{totalItems}</span> {/* Affichez la longueur du tableau de produits dans le panier */}
                      </div>
                    </NavLink>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
