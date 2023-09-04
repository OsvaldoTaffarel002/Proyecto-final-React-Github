import React from 'react';
import './Profesionales.css'

const Profesionales = () => {
    return(
        <div className='profesionales'>
            <div className='card-left'>
                <div className='card-left-content'>
                    <div><img src="https://dummyimage.com/300x150/ffffff/000000" alt="" /></div>
                    <div>
                        <h3>Create Simple <br/> Digital Management</h3>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus corporis quasi facere ullam eligendi reprehenderit, voluptas hic nesciunt voluptatum sapiente explicabo maxime</p>
                    </div>
                    <button>See more product</button>
                </div>
            </div>
            <div className='card-right'>
                <div className='card-right-content'>
                    <div className="img-container">
                        <img src="https://dummyimage.com/150x150/ffffff/000000" alt="" class="img-a"/>
                        <img src="https://dummyimage.com/150x150/ffffff/000000" alt="" class="img-b"/>
                        <img src="https://dummyimage.com/150x150/ffffff/000000" alt="" class="img-c"/>
                    </div>
                    <div>
                        <h3>Effectiveness Make <br/>Branding Company</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quas ipsum delectus earum quod sed nisi voluptas quia labore aliquid id quaerat maiores officia, veniam explicabo fugiat</p>
                    </div>
                    <button>See more product</button>
                </div>
            </div>
        </div>
    )
}

export { Profesionales }