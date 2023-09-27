import React from 'react';
import './Carrousel.css'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

const Carrousel = () => {
    return(
        <section class="options">
        <div class="options-left">
            <div>
                <h2>We Never Want To <br/>Disappoint You</h2>
            </div>
            <div>
                <h3><FontAwesomeIcon icon={faAnglesRight} style={{marginRight:"15px"}}/>Choose Our Best Service</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus nesciunt, itaque aliquam nobis architecto autem? Praesentium eligendi suscipit pariatur expedita numquam vitae ea harum, reiciendis voluptate! Architecto aliquid vero nemo!</p>
                <h3><FontAwesomeIcon icon={faAnglesRight} style={{marginRight:"15px"}}/>Select Your Business Need</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi deleniti earum aliquid nisi sequi iste enim, nam facere soluta facilis dolorum natus optio eaque quas voluptatem? Sapiente cumque perspiciatis assumenda.</p>
                <h3><FontAwesomeIcon icon={faAnglesRight} style={{marginRight:"15px"}}/>Customize Management</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quod, modi blanditiis ducimus sequi libero nobis adipisci et harum qui autem! Mollitia laboriosam tempore, natus vero illo modi aperiam molestias.</p>
            </div>
        </div>
        <div class="options-right">
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img className="d-block w-100" src="https://dummyimage.com/400x400/fff/000" alt="First slide" />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://dummyimage.com/400x400/fff/000" alt="Second slide" />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://dummyimage.com/400x400/fff/000" alt="Third slide" />
                <Carousel.Caption>
                   <h5>Third slide label</h5>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </section>
    )
}

export { Carrousel }