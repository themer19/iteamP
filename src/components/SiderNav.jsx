import React, { Component } from "react";

class SiderNav extends Component {
    render() {
        return (
            <div>
                <div className="jewellery_section">
                    <div id="jewellery_main_slider" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <h1 className="fashion_taital">Jewellery Accessories</h1>
                                    <div className="fashion_section_2">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-4">
                                                <div className="box_main">
                                                    <h4 className="shirt_text">Jumkas</h4>
                                                    <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                                    <div className="jewellery_img"><img src="%PUBLIC_URL%/menu/images/jhumka-img.png" alt="" /></div>
                                                    <div className="btn_main">
                                                        <div className="buy_bt"><a href="a">Buy Now</a></div>
                                                        <div className="seemore_bt"><a href="a">See More</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-4">
                                                <div className="box_main">
                                                    <h4 className="shirt_text">Necklaces</h4>
                                                    <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                                    <div className="jewellery_img"><img src="%PUBLIC_URL%/menu/images/neklesh-img.png" alt="" /></div>
                                                    <div className="btn_main">
                                                        <div className="buy_bt"><a href="d">Buy Now</a></div>
                                                        <div className="seemore_bt"><a href="d">See More</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-4">
                                                <div className="box_main">
                                                    <h4 className="shirt_text">Kangans</h4>
                                                    <p className="price_text">Start Price  <span style={{ color: "#262626" }}>$ 100</span></p>
                                                    <div className="jewellery_img"><img src="%PUBLIC_URL%/menu/images/kangan-img.png" alt="" /></div>
                                                    <div className="btn_main">
                                                        <div className="buy_bt"><a href="d">Buy Now</a></div>
                                                        <div className="seemore_bt"><a href="d">See More</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                {/* Second carousel item */}
                            </div>
                            <div className="carousel-item">
                                {/* Third carousel item */}
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#jewellery_main_slider" role="button" data-slide="prev">
                            <i className="fa fa-angle-left" />
                        </a>
                        <a className="carousel-control-next" href="#jewellery_main_slider" role="button" data-slide="next">
                            <i className="fa fa-angle-right" />
                        </a>
                        <div className="loader_main">
                            <div className="loader" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div id="my_slider" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="banner_taital">Get Start <br />
Your favriot shoping</h1>
                                        <div className="buynow_bt"><a href="s">Buy Now</a></div>
                                    </div>
                                </div>
                            </div>
                            {/* Add more carousel items as needed */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SiderNav;
