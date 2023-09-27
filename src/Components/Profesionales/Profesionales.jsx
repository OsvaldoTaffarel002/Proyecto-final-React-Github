import React from 'react';
import './Profesionales.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

const Profesionales = () => {
    return(
        <section className="profesionales">
        <div className="profesionales-card-left">
            <div class="comments-txt">
                <img src="https://dummyimage.com/300x200/000/fff" alt=""/>
                <div className="comments-txt-btns">
                    <button className="comments-txt-btns-top">Yes, you can order that's</button>
                    <button className="comments-txt-btns-bottom">Yes, you can order digital agency</button>
                </div>
            </div>
            <h3>Create Simple <br/>Digital Management</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt blanditiis porro, repellendus totam ea, accusantium tenetur beatae quibusdam asperiores voluptate unde sapiente cum esse quia.
            </p>
            <button className="profesionales-card-left-btn">See More Product<FontAwesomeIcon icon={faChevronRight} style={{marginLeft:"10px",}}/></button>
        </div>
        <div className="profesionales-card-right">
            <div className="profesionales-card-right-images">
                <img src="https://dummyimage.com/200x200/fff/000" alt=""/>
                <img className="img-center-profesionales" src="https://dummyimage.com/200x200/fff/000" alt=""/>
                <img src="https://dummyimage.com/200x200/fff/000" alt=""/>
            </div>
            <h3>Effectiveness Make <br/>Branding Company</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ea quia omnis veritatis eligendi necessitatibus eum facilis sapiente magni, atque possimus recusandae voluptate quae minima eaque vitae quos et.</p>
            <button className="profesionales-card-right-btn">See More Product<FontAwesomeIcon icon={faChevronRight} style={{marginLeft:"10px",}}/></button>
        </div>
    </section>
    )
}

export { Profesionales }