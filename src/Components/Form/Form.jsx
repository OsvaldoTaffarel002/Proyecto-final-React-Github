import React from 'react';
import './Form.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons'

const Form = () => {
    return(
        <section className="form">
        <div className="form-left">
            <h3>Feel Free To Asking Or Get <br/>Our Latest Information</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorem minima ipsa perferendis porro cupiditate distinctio iure quidem, rem nulla laborum ratione, eligendi voluptas odio reprehenderit excepturi hic vitae placeat!</p>
            <div className="email-container">
                <input type="email" placeholder="Your email ..." name="email" id="input-email" required/>
                <input type="submit" value="Let's Talk" id="input-submit"/>
            </div>
            <div className="checks">
                <b><FontAwesomeIcon icon={faCircleCheck} style={{marginRight:"15px",}}/>Benefit Featured</b>
                <b><FontAwesomeIcon icon={faCircleCheck} style={{marginRight:"15px",}}/>Streaming Service</b>
                <b><FontAwesomeIcon icon={faCircleCheck} style={{marginRight:"15px",}}/>24 Hours Services</b>
            </div>
        </div>
        <div className="form-right">
            <img src="https://dummyimage.com/300x200/fff/000" alt=""/>
            <img src="https://dummyimage.com/300x200/fff/000" alt=""/>
            <img src="https://dummyimage.com/300x200/fff/000" alt=""/>
            <img src="https://dummyimage.com/300x200/fff/000" alt=""/>
        </div>
    </section>
    )
}

export { Form }