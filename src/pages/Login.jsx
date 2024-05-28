import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


class Login extends Component {
  render(){
    return (
    
<div>
<section className="ftco-section">
          <div className="container">
          <div className="row justify-content-center">
              <div className="col-md-12 col-lg-10">
                <div className="wrap d-md-flex">
                  <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                    <div className="text w-100">
                      <h2>Vous n’avez pas de compte ?</h2>
                      <Link to="/cree_compte" className="btn btn-white btn-outline-white">
                        envoyer une demande de création de compte
                      </Link>
                    </div>
                  </div>
                  <div className="login-wrap p-4 p-lg-5">
                    <div className="d-flex">
                      <div className="w-100">
                      <Link to="/acc_user">
                        <h3 className="mb-4">Connexion </h3>
                      </Link>
                      </div>
                    </div>
                    <form action="#" className="signin-form">
                      <div className="form-group mb-3">
                        <label className="label" htmlFor="name">
                          Numéro client
                        </label>
                        <input type="text" className="form-control" placeholder="Numéro client" required />
                      </div>
                      <div className="form-group mb-3">
                        <label className="label" htmlFor="password">
                          Mot de passe
                        </label>
                        <input type="password" className="form-control" placeholder="Mot de passe" required />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="form-control btn btn-primary submit px-3">
                        connexion
                        </button>
                      </div>
                      <div className="form-group d-md-flex">
                        <div className="w-50 text-left">
                          <label className="checkbox-wrap checkbox-primary mb-0">
                        
                    
                          </label>
                        </div>
                        <div className="w-50 text-md-right">
                          <a href="#x">Mot de passe oublié ?</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

</div>
    
  );
    }
}

export default Login
