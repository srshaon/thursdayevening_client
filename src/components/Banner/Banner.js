import './Banner.css';

import React from 'react';

const Banner = () => {
    return (
        <div >
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ibb.co/0J74tLg/New-Zealand-adventure-Getty-Images-585144798.jpg?fbclid=IwAR3RKfsuI7TzTtSynDdlNRKhEm-0_aLSB73M_wv9TIMAuHwoAxM11dH6fvc" className="img-fluid d-block w-100" alt="..." />
                        <div style={{ marginBottom: '100px' }} className="carousel-caption d-block ">
                            <h2>Welcome to Thursday Evening</h2>
                            <h5 style={{ fontWeight: '700' }}>Feel The Chill</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/T24KnmF/180427121009-pakistan-adventure-travel-secret-dreamstime-nangha-parbat-1.jpg?fbclid=IwAR2n84sGARbqZ2KsnWX9tE3no-hf5HftHRsueLXGk2Os1cspbJLKp2ngpEU" className="img-fluid d-block w-100" alt="..." />
                        <div style={{ marginBottom: '100px' }} className="carousel-caption d-block ">
                            <h2>Welcome to Thursday Evening</h2>
                            <h5 style={{ fontWeight: '700' }}>Feel The Chill</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/MVkq3gy/3753783.jpg?fbclid=IwAR1mgXohFP1dYo9KjLrVYDA9q5MidrtT4pxnBdVDkmyE7dNriFgZtHyct6Y" className="img-fluid d-block w-100" alt="..." />
                        <div style={{ marginBottom: '100px' }} className="carousel-caption d-block ">
                            <h2>Welcome to Thursday Evening</h2>
                            <h5 style={{ fontWeight: '700' }}>Feel The Chill</h5>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;