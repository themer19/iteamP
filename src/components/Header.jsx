import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondText: "Entrez dans un monde d'opportunités avec nos offres exceptionnelles.",
            isSecondTextVisible: false // État pour indiquer si le deuxième texte est visible ou non
        };
    }
    
    openNav() {
        // Fonction openNav à implémenter selon vos besoins
    }
    
    handleNextClick = () => {
        // Mettre ici le texte que vous voulez afficher lorsque vous cliquez sur "carousel-control-next"
        this.setState(prevState => ({ isSecondTextVisible: !prevState.isSecondTextVisible }));
    };
    
    handlePrevClick = () => {
        // Vérifier si la première texte est visible
        if (this.state.isSecondTextVisible) {
            // Si la deuxième texte est visible, retourner à la première texte
            this.setState({ isSecondTextVisible: false });
        } else {
            // Si la première texte est visible, passer à la deuxième texte
            this.setState({ isSecondTextVisible: true });
        }
    };
    
    
    

    render() {
        const { secondText, isSecondTextVisible } = this.state;
        return (
            <div>
                <div className="banner_bg_main">
                    {/* header top section start */}
                    {/* header top section end */}
                    {/* logo section start */}
                    <div className="logo_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="logo"><a href="istml"> </a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* logo section end */}
                    {/* header section start */}
                    <div className="header_section">
                        <div className="container">
                            <div className="containt_main">
                                <span className="toggle_icon" onClick={this.openNav}></span>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  CATÉGORIES
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="e">ORDINATEURS</a>
                                        <a className="dropdown-item" href="e">SMARTPHONE</a>
                                        <a className="dropdown-item" href="#e">ELECTRONIQUE</a>
                                    </div>
                                </div>
                                <div className="main">
                                    {/* Another variation with a button */}
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Recherche" />
                                        <div className="input-group-append">
                                            <button className="btn btn-secondary" type="button" style={{ backgroundColor: "#f26522", borderColor: "#f26522" }}>
                                                <i className="fa fa-search" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="header_box">
                                    <div className="lang_box ">
                                    </div>
                                    <div className="login_menu">
                                        <ul>

                                            <li>

                                                <i className="fa fa-user" aria-hidden="true" />
                                                <Link to="connecte">connexion</Link>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="banner_section layout_padding">
                        <div className="container">
                            <div id="my_slider" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-sm-12">
                                            <h6 className="banner_taital" style={{ fontFamily: 'Times New Roman, serif', fontSize: '63px', fontWeight: 'bold', lineHeight: '1.5'}} >
  {isSecondTextVisible ? secondText : (
    <span>
      Explorez l'avenue numérique <br />chez  <br /> <span style={{ color: '#FF4500' }}>Ville-TechMarket</span>
    </span>
  )}
</h6>
                                                <div className="buynow_bt"><a href="s">Sachez qui nous sommes</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev" onClick={this.handlePrevClick}>
                                    <i className="fa fa-angle-left" />
                                </a>
                                <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next" onClick={this.handleNextClick}>
                                    <i className="fa fa-angle-right" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Header;
