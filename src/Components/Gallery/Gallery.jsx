import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return(
        <section className="gallery">
        <div className="txt-main">
            <h2>We Always Provide The Best <br/> Service For You</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut praesentium itaque hic quis facilis, eaque saepe quae veniam perspiciatis, culpa, voluptatum aperiam omnis magni quo nemo est sequi totam!</p>
        </div>
        <div className="bodyimg-container">
            <div className="img-container-gallery">
                <img src="https://dummyimage.com/300x200/ffffff/000000" alt=""/>
                <h3>Email Marketing</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, reiciendis. Nobis error asperiores nesciunt excepturi corrupti unde itaque, doloribus dolores ducimus eos obcaecati doloremque consectetur nostrum molestiae est nisi vitae?</p>
            </div>
            <div className="img-container-gallery">
                <img src="https://dummyimage.com/300x200/ffffff/000000" alt=""/>
                <h3>Adsense Manager</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum deserunt, consequuntur iste ab quod delectus impedit quasi, ipsam eum exercitationem, facilis numquam. Quos explicabo repudiandae iste nisi sapiente amet enim.</p>
            </div>
            <div className="img-container-gallery">
                <img src="https://dummyimage.com/300x200/ffffff/000000" alt=""/>
                <h3>Ads Management</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aspernatur hic ex quam ratione laudantium, non numquam distinctio soluta ut sapiente? Assumenda odio corporis voluptatem animi expedita provident ipsam debitis.</p>
            </div>
            <div className="img-container-gallery">
                <img src="https://dummyimage.com/300x200/ffffff/000000" alt=""/>
                <h3>Digital Consultancy</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eum facilis porro. Minus, labore? Repellat molestias itaque consequuntur ipsum doloribus voluptas saepe. Beatae accusamus non culpa error. Vero, porro ea?</p>
            </div>
            <div className="img-container-gallery">
                <img src="https://dummyimage.com/300x200/ffffff/000000" alt=""/>
                <h3>Content Marketing</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit eum quisquam est aut perferendis, beatae, atque aspernatur nisi adipisci omnis repellat, doloribus voluptas ut itaque fugiat? Neque officiis asperiores voluptatem.</p>
            </div>
            <div className="img-container-gallery">
                <img src="https://dummyimage.com/300x200/ffffff/000000" alt=""/>
                <h3>Socmed Marketing</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quisquam doloribus quia maiores, atque odit consectetur dolores aperiam ea, qui, cupiditate alias voluptates natus sunt magnam rem? Beatae, quos vitae!</p>
            </div>
        </div>
        <div className="txt-orange-container">
            <div className="txt-orange">
                <h3>10Min</h3>
                <p>Support response time</p>
            </div>
            <div className="txt-orange">
                <h3>90/100</h3>
                <p>Is 100 big companies</p>
            </div>
            <div className="txt-orange">
                <h3>99.99%</h3>
                <p>Customers are satisfied</p>
            </div>
            <div className="txt-orange">
                <h3>200K</h3>
                <p>Of successfull projects</p>
            </div>
            <div className="txt-orange">
                <h3>340K</h3>
                <p>Client contact us</p>
            </div>
        </div>
    </section>
    )
}

export { Gallery }