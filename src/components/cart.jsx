import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity, clearCart } from '../redux/action/index';
import { MdDelete } from 'react-icons/md';

const CartPage = () => {
  const cart = useSelector(state => state.handleCart);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calcul du prix total du panier
  const totalPrice = cart.reduce((total, item) => {
    return total + (item.price * item.qty);
  }, 0).toFixed(2);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="s#">Votre Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#s">Accueil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#s">Produits</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#s">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div>
          <h2 className="mb-4">Mon Panier</h2>
          {cart.length === 0 ? (
            <p>Votre panier est vide</p>
          ) : (
            <ul className="list-group">
              {cart.map(item => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img src={item.image} alt={item.name} className="me-3" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                    <div>
                      <span>{item.name}</span>
                      <span className="ms-3">Prix unitaire: ${item.price}</span>
                      <span className="ms-3">Quantité: {item.qty}</span>
                      <span className="ms-3">Prix total: ${(item.price * item.qty).toFixed(2)}</span>
                      <div className="mt-2">
                        <button className="btn btn-outline-primary me-2" onClick={() => handleDecrement(item)}>-</button>
                        <button className="btn btn-outline-primary" onClick={() => handleIncrement(item)}>+</button>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-danger" onClick={() => dispatch(removeFromCart(item))}>
                    <MdDelete />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-3">
            <p>Prix total du panier: ${totalPrice}</p>
            <button className="btn btn-danger me-3" onClick={handleClearCart}>Vider le panier</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
