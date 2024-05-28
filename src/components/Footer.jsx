import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer_section layout_padding">
                    <div className="container">
                        <div className="footer_logo">
                          
                        </div>
                        <div className="input_bt">
                            <input type="text" className="mail_bt" placeholder="Your Email" name="Your Email" />
                            <span className="subscribe_bt" id="basic-addon2">
                                <a href="a.html">Subscribe</a>
                            </span>
                        </div>
                        <div className="footer_menu">
                            <ul>
                                <li><a href="a.html">Best Sellers</a></li>
                                <li><a href="a.html">Gift Ideas</a></li>
                                <li><a href="a.html">New Releases</a></li>
                                <li><a href="a.html">Today's Deals</a></li>
                                <li><a href="a.html">Customer Service</a></li>
                            </ul>
                        </div>
                        <div className="location_main">Help Line Number : <a href="a.html">+1 1800 1200 1200</a></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
