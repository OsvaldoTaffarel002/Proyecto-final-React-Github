import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle, faEarthAmericas} from '@fortawesome/free-solid-svg-icons'
import {faCopyright} from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
    return(
        <section className="footer">
        <div className="footer-top">
            <div className="footer-top1">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quas dolorem praesentium tenetur eveniet necessitatibus incidunt eum, quis, magnam rerum omnis perspiciatis commodi dolore. Consequatur et voluptas animi nesciunt sapiente?</p>
                <b>Developed by Osvaldo Taffarel<FontAwesomeIcon icon={faCircle} style={{marginRight:"10px", marginLeft:"15px"}}/> Changelog</b>
            </div>
            <div className="footer-top2">
                <h3>Support</h3>
                <h5>About us</h5>
                <h5>Server Status</h5>
                <h5>Suggest a feature</h5>
                <h5>Open Design</h5>
                <h5>Help Center</h5>
            </div>
            <div className="footer-top3">
                <h3>Company</h3>
                <h5>Versioning</h5>
                <h5>Pricing</h5>
                <h5>Download</h5>
                <h5>Getting Started</h5>
                <h5>Report a Bug</h5>
            </div>
            <div className="footer-top4">
                <h3>Resources</h3>
                <h5>Calle 20, Mercedes</h5>
                <h5>2324 683827</h5>
                <h5>osvaldo.taffarel002@gmail.com</h5>
                <button><FontAwesomeIcon icon={faEarthAmericas} style={{marginRight:"10px", backgroundColor:"#ff9a66"}}/>Best Product Bussiness</button>
            </div>
        </div>
        <div className="footer-bottom">
            <div>
                <h5>Digital Agency WordPress Website</h5>
            </div>
            <div>

            </div>
            <div>
                <h5><FontAwesomeIcon icon={faCopyright} style={{marginRight:"10px"}}/>2023 All Rights Reserved</h5>
            </div>
        </div>
    </section>
    )
}

export { Footer }