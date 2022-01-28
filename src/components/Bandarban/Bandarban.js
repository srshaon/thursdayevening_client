import React, { useEffect, useState } from 'react';

import { FaStar } from 'react-icons/fa';

const Bandarban = () => {
    const [spots, setSpots] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tourSpots')
            .then(res => res.json())
            .then(data => setSpots(data.slice(2, 3)))
    }, [])
    let starNumber = 0;
    return (
        <div className='mb-4'>
            <div>

                {
                    spots.map(spot => <div>
                        <h1 style={{ color: "white" }}>{spot.location} Tour Spot
                            <span className='ms-2 align-items-center' style={{ fontSize: 20 }}>
                                {[...Array(5)].map((star, i) => {
                                    starNumber += 1;
                                    return <label key={i}>
                                        <input style={{ display: 'none' }} type="radio" name="rating" id="" />

                                        <FaStar color={starNumber <= spot.rating ? "yellow" : "grey"} />
                                    </label>
                                })}
                            </span>

                        </h1>

                        <p className='ms-2 me-2' style={{ color: "white" }}>{spot.details.slice(0, 344)}</p>
                        <img style={{ width: 900 }} className=' me-2' src={spot.image} alt="" />
                        <p style={{ color: "white" }}>{spot.details.slice(344, 867)}</p>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Bandarban;