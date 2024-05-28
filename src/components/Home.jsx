import React, { useState, useEffect } from "react";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { addToCart } from '../redux/action/index';
import { connect } from "react-redux";

const Home = ({ dispatch }) => {
    const [state, setState] = useState({
        items: [],
        items2: [],
        currentPage2: 0,
        currentPage: 0,
        itemsPerPage: 3,
        maxTitleLength: 0 // Ajouter une propriété pour suivre la longueur maximale des titres
    });

    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        fetchCarouselItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchCarouselItems = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setState(prevState => ({ ...prevState, items: response.data }));
                findMaxTitleLength(response.data); // Appeler la fonction pour trouver la longueur maximale des titres
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données de l\'API :', error);
            });

        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setState(prevState => ({ ...prevState, items2: response.data }));
                findMaxTitleLength(response.data); // Appeler la fonction pour trouver la longueur maximale des titres
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données de l\'API :', error);
            });
    }

    const findMaxTitleLength = (items) => {
        const maxTitleLength = Math.max(...items.map(item => item.title.length));
        setState(prevState => ({ ...prevState, maxTitleLength }));
    }

    const handlePrev = (carousel) => {
        if (carousel === 1) {
            setState(prevState => ({ ...prevState, currentPage: prevState.currentPage - 1 }));
        } else if (carousel === 2) {
            setState(prevState => ({ ...prevState, currentPage2: prevState.currentPage2 - 1 }));
        }
    }

    const handleNext = (carousel) => {
        if (carousel === 1) {
            setState(prevState => ({ ...prevState, currentPage: prevState.currentPage + 1 }));
        } else if (carousel === 2) {
            setState(prevState => ({ ...prevState, currentPage2: prevState.currentPage2 + 1 }));
        }
    }

    const handleAddToCart = () => {
        if (selectedItem) {
            dispatch(addToCart(selectedItem));
        }
    };

    const { items, items2, currentPage, currentPage2, itemsPerPage, maxTitleLength } = state;

    if (!Array.isArray(items) || !Array.isArray(items2)) {
        return <div>Chargement...</div>;
    }

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    const startIndex2 = currentPage2 * itemsPerPage;
    const endIndex2 = startIndex2 + itemsPerPage;
    const currentItems2 = items2.slice(startIndex2, endIndex2);

    const itemGroups = [];
    const itemGroups2 = [];
    for (let i = 0; i < currentItems.length; i += 3) {
        itemGroups.push(currentItems.slice(i, i + 3));
    }
    for (let i = 0; i < currentItems2.length; i += 3) {
        itemGroups2.push(currentItems2.slice(i, i + 3));
    }

    const titleStyle = {
        maxWidth: `${maxTitleLength * 10}px`, // Utilisez la longueur maximale des titres pour fixer la largeur maximale en pixels
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    };

    return (
        <div>
            <div className="fashion_section">
                <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {itemGroups.map((group, index) => (
                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                <div className="container">
                                    <h1 className="display-4">Electro Tunis</h1>
                                    <div className="fashion_section_2 row">
                                        {group.map((item, idx) => (
                                            <div className="col-lg-4 col-md-4 col-sm-6" key={idx}>
                                                <div className="box_main">
                                                    <h4 className="shirt_text" style={titleStyle}>{item.title}</h4>
                                                    <div className="electronic_img"><img src={item.image} alt="" style={{ width: '100%', height: '200px' }} /></div>
                                                    <p className="price_text">Prix:<span style={{ color: "#262626" }}>{item.price}Dt</span></p>

                                                    <div className="btn_main">
                                                        <div className="buy_bt">
                                                            <button type="button" className="btn btn-success" onClick={() => {
    setSelectedItem(item);
    handleAddToCart(item);
}}>
                                                                Acheter
                                                            </button>
                                                        </div>
                                                        <div className="seemore_bt">
                                                            <NavLink to={`/produit/${item.id}`} >Aperçu</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a className="carousel-control-prev" href="#electronic_main_slider" role="button" data-slide="prev" onClick={() => handlePrev(1)}>
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="carousel-control-next" href="#electronic_main_slider" role="button" data-slide="next" onClick={() => handleNext(1)}>
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>
            <div className="fashion_section">
                <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {itemGroups2.map((group, index) => (
                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                <div className="container">
                                    <h1 className="display-4">Ordinateur</h1>
                                    <div className="fashion_section_2 row">
                                        {group.map((item, idx) => (
                                            <div className="col-lg-4 col-md-4 col-sm-6" key={idx}>
                                                <div className="box_main">
                                                    <h4 className="shirt_text" style={titleStyle}>{item.title}</h4>
                                                    <div className="electronic_img"><img src={item.image} alt="" style={{ width: '100%', height: '200px' }} /></div>
                                                    <p className="price_text">Prix:<span style={{ color: "#262626" }}>{item.price}Dt</span></p>

                                                    <div className="btn_main">
                                                        <div className="buy_bt">
                                                        <button type="button" className="btn btn-success" onClick={() => {
    setSelectedItem(item);
    handleAddToCart(item);
}}>
                                                                Acheter
                                                            </button>
                                                        </div>
                                                        <div className="seemore_bt">
                                                            <NavLink to={`/produit/${item.id}`} >Aperçu</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a className="carousel-control-prev" href="#electronic_main_slider" role="button" data-slide="prev" onClick={() => handlePrev(2)}>
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="carousel-control-next" href="#electronic_main_slider" role="button" data-slide="next" onClick={() => handleNext(2)}>
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default connect()(Home);
