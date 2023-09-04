import React from 'react';
import './Footer.css';
import {faEarthAmericas} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return(
        <div className='Footer'>
            <footer>
                <div className='footer'>
                    <div className='txt-footer'>
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cumque repellendus voluptas delectus, omnis at, recusandae facilis est tempore minus hic aperiam a sequi quos nisi explicabo nihil ipsa numquam.</h3>
                        <h4>Developed by Osvaldo Taffarel <FontAwesomeIcon icon={faCircle} size='xs' style={{marginRight: "10px", marginLeft: "10px"}}/>Changelog</h4>
                    </div>
                    <div className='support'>
                        <h3>Support</h3>
                        <h4>About us</h4>
                        <h4>Server status</h4>
                        <h4>Suggest a feature</h4>
                        <h4>Open Design</h4>
                        <h4>Help center</h4>
                    </div>
                    <div className='company'>
                        <h3>Company</h3>
                        <h4>Versioning</h4>
                        <h4>Pricing</h4>
                        <h4>Download</h4>
                        <h4>Getting Started</h4>
                        <h4>Report a bug</h4>
                    </div>
                    <div className='resources'>
                        <h3>Resources</h3>
                        <h4>Sylhet 3100, Bangladesh</h4>
                        <h4>+8801714457298</h4>
                        <h4>riaadarif@gmail.com</h4>
                        <button className='btn-footer'>
                            <h2><FontAwesomeIcon className='icon-footer' icon={faEarthAmericas} size='2xl' style={{marginRight:"10px"}}/>Best Product Bussiness</h2>
                            <h4>awarding world</h4>
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export { Footer }