import React from 'react';
import './Cards.css';

const Cards = () => {
    return(
        <div className='cards'>
        <div className='cards-title'>
            <h2>What Did They Say</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aliquam tenetur! Laudantium vel labore tenetur repellendus adipisci illo, quaerat nihil cumque rerum, quibusdam expedita commodi saepe est natus animi alias.</p>
        </div>
        <div className='cards-container'>
            <div className='card-left'>
                <div className='img-card-left'>
                    <img src="https://dummyimage.com/250x400/ffffff/000" alt=""/>
                </div>
                <div className='card-left-txt'>
                    <h3>★★★★★</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolor maiores fuga a, atque tempore ipsa quas quisquam quibusdam totam ex ipsum minus, mollitia error illum, incidunt hic aut delectus!</p>
                    <h4>Bessie Cooper</h4>
                    <h5>UX Designer</h5>
                </div>
            </div>
            <div className='card-right'>
                <div className='img-card-right'>
                    <img src="https://dummyimage.com/250x400/ffffff/000" alt=""/>
                </div>
                <div className='card-right-txt'>
                    <h3>★★★★★</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolor maiores fuga a, atque tempore ipsa quas quisquam quibusdam totam ex ipsum minus, mollitia error illum, incidunt hic aut delectus!</p>
                    <h4>Darrell Steward</h4>
                    <h5>UX Designer</h5> 
                </div>
                </div>
            </div>
        <div className='cards-btn-cards'>
            <button>More Testimony</button>
        </div>
    </div>
    )
}

export { Cards }