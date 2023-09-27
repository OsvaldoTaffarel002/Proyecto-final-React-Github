import React from 'react';
import './Plans.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'

const Plans = () => {
    return(
        <section className="plans">
        <div className="plans-title">
            <h3>Open Design Powers Trusted <br/>Tools In The Design Space</h3>
            <button><FontAwesomeIcon icon={faCircle} /><FontAwesomeIcon icon={faCircle} /><FontAwesomeIcon icon={faCircle} style={{marginRight:"10px"}}/>Many people joined</button>
        </div>
        <div className="plans-cards">
            <div className="card1">
                <h3>Beginner</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rem deleniti laborum quaerat? Obcaecati laborum aspernatur, ad assumenda pariatur aliquid incidunt dolor velit nam vero magni rerum modi in aliquam?</p>
                <h4>$32 <span>/month each user</span></h4>
                <div className="cards-btn-plans">
                    <button>Choose Plan</button>
                </div>
            </div>
            <div className="card2">
                <h3>Essential</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rem deleniti laborum quaerat? Obcaecati laborum aspernatur, ad assumenda pariatur aliquid incidunt dolor velit nam vero magni rerum modi in aliquam?</p>
                <h4>$89 <span>/month each user</span></h4>
                <div className="cards-btn-plans">
                    <button>Choose Plan</button>
                </div>
            </div>
            <div className="card3">
                <h3>Professional</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rem deleniti laborum quaerat? Obcaecati laborum aspernatur, ad assumenda pariatur aliquid incidunt dolor velit nam vero magni rerum modi in aliquam?</p>
                <h4>$222 <span>/month each user</span></h4>
                <div className="cards-btn-plans">
                    <button>Choose Plan</button>
                </div>
            </div>
        </div>
    </section>
    )
}

export { Plans }