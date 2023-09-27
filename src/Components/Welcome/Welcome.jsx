import React from 'react';
import './Welcome.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons'
import {faCube} from '@fortawesome/free-solid-svg-icons'

const Welcome = () => {
    return(
        <section className="welcome">
        <div className="welcome-left">
            <div className="img-container-welcome-left">
                <img src="https://dummyimage.com/200x200/fff/000" alt=""/>
                <img src="https://dummyimage.com/200x200/fff/000" alt=""/>
                <img src="https://dummyimage.com/200x200/fff/000" alt=""/>
                <img src="https://dummyimage.com/200x200/fff/000" alt=""/>
            </div>
            <div className="text-container-welcome-left">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate fugiat blanditiis perferendis molestias sint! Ullam molestias, et itaque a totam perferendis reprehenderit</p>
            </div>
        </div>
        <div className="welcome-right">
            <button>Digital Agency<FontAwesomeIcon icon={faCube} style={{marginRight:"10px", marginLeft:"10px"}}/>Verified</button>
            <h3>Your Digital <br/>Business Partner</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ab illum quaerat beatae cum ipsum? Error ea itaque nihil tempore eaque? Eos eveniet nam, consequuntur eligendi aliquam illum maiores quos?</p>
            <ul>
                <li><FontAwesomeIcon icon={faCircleCheck} style={{marginRight:"15px",}}/>Professional Skill</li>
                <li><FontAwesomeIcon icon={faCircleCheck} style={{marginRight:"15px",}}/>Good Communication</li>
                <li><FontAwesomeIcon icon={faCircleCheck} style={{marginRight:"15px",}}/>Fast Respond and Responsive</li>
            </ul>
            <div className="welcome-right-btn-container">
                <button className="btn-welcome-1">Let's Start Now<FontAwesomeIcon icon={faChevronRight} style={{marginLeft:"10px",}}/></button>
                <button className="btn-welcome-2">Learn More</button>
            </div>
        </div>
    </section>
    )
}

export { Welcome }