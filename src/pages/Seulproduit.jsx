import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action/index';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

const Seulproduit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product)); 
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
        // Vous pourriez afficher un message d'erreur à l'utilisateur ici
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  return (
    <div className="container">
      {loading ? (
        <div className="row">
          <div className="col-md-6">
            <Skeleton height={400} />
          </div>
          <div className="col-md-6" style={{ lineHeight: 2 }}>
            <Skeleton height={50} width={300} />
            <Skeleton height={75} />
            <Skeleton height={25} width={150} />
            <Skeleton height={50} />
            <Skeleton height={150} />
            <Skeleton height={50} width={100} />
            <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-6">
            <img src={product.image} alt={product.title} height="400px" width="400px" />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col">
                <h4 className="text-uppercase text-black-50">{product.category}</h4>
                <h1 className="display-5">{product.title}</h1>
                <p className="lead">
                  Rating {product.rating && product.rating.rate}
                  <i className="fa fa-star"></i>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2 className="display-6 fw-blod my-4">${product.price}</h2>
                <p className="lead">{product.description}</p>
                <>
                  <button type="button" className="btn btn-success" onClick={handleAddToCart}>
                    Acheter
                  </button>

                  <NavLink to="/Cart" className="btn btn-primary">
  Vers la carte
</NavLink>
                </>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Seulproduit;
