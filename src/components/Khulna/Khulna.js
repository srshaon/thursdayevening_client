import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import { FaStar } from 'react-icons/fa';

const Khulna = () => {
    const [spots, setSpots] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tourSpots')
            .then(res => res.json())
            .then(data => setSpots(data.slice(0, 1)))
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

                        <p className='ms-2 me-2' style={{ color: "white" }}>{spot.details.slice(0, 533)}</p>
                        <img style={{ width: 900 }} className=' me-2' src={spot.image} alt="" />
                        <p style={{ color: "white" }}>{spot.details.slice(533, 1350)}</p>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Khulna;