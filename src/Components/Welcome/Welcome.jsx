import React from 'react';
import './Welcome.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons'

const Welcome = () => {
    return(
        <section className='welcome'>
            <div className='welcome-left'>
                <div className='img-container'>
                    <img src="https://dummyimage.com/300x300/ffffff/fff" alt="" />
                    <img src="https://dummyimage.com/300x300/ffffff/fff" alt="" />
                    <img src="https://dummyimage.com/300x300/ffffff/fff" alt="" />
                    <img src="https://dummyimage.com/300x300/ffffff/fff" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi earum porro laboriosam corrupti sit, et quis, adipisci nulla, odio hic ut iste maiores at sed id! Numquam, veniam adipisci.</p>
                </div>
            </div>
            <div className='welcome-right'>
                <h2>Your Digital <br/>Business Partner</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quam ab distinctio expedita libero repudiandae culpa voluptates similique cumque temporibus dolorum pariatur reprehenderit explicabo dolore ipsam, voluptatum dicta unde assumenda.</p>
                <ul>
                    <li><FontAwesomeIcon icon={faCircleCheck} size='lg' style={{marginRight:"10px"}}/>Profesional skills</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} size='lg' style={{marginRight:"10px"}}/>Good Communication</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} size='lg' style={{marginRight:"10px"}}/>Fast Respond and responsive</li>
                </ul>
                <div>
                    <button className='btn-left'>Let´s Start Now<FontAwesomeIcon icon={faChevronRight} size='2xs' style={{marginLeft:"5px"}}/></button>
                    <button className='btn-right'>Learn More</button>
                </div>
            </div>
        </section>
    )
}

export { Welcome }