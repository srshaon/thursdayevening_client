import React from 'react';
import useAuth from '../../hooks/useAuth';
import './AdminBlog.css';

const AdminBlog = (props) => {
    const { isAdmin } = useAuth()
    const { _id, image, travelerName, travelerImage, Location, category, cost, address, description } = props.blog;
    const { handleDelete } = props;
    return (
        <div className='mb-4'>
            <div className="col h-100">
                <div style={{ backgroundImage: "" }} className="card singlecard ">
                    <img src={image} alt="" className=" w-100   " />
                    <div className="card-body text-center">


                        <div className='card-text mt-3'  >
                            <span style={{ fontSize: 20, color: "white" }}>Traveler:</span> <span style={{ marginLeft: 10, color: "white", fontSize: 20 }}>{travelerName}</span>
                            <img className='rounded-circle ms-4' style={{ width: 40 }} src={travelerImage} alt="" />
                        </div>

                        <div className='card-text mt-3'  >
                            <span style={{ fontSize: 20, color: "white", marginRight: 50 }}>TourSpot:  {Location}</span>

                        </div>
                        <div className='card-text mt-3'  >
                            <span style={{ fontSize: 20, color: "white", marginRight: 20 }}>Category: {category}</span>

                        </div>
                        <div className='card-text mt-3'  >
                            <span style={{ fontSize: 20, color: "white", marginRight: 80 }}>Spot Address:  {address}</span>

                        </div>
                        <div className='card-text mt-3' >
                            <span style={{ fontSize: 20, color: "white", marginRight: 50 }}>Total Cost: ৳{cost} </span>
                        </div>
                        <div style={{ color: "white" }} className='card-text mt-3'>{description.slice(0, 200)}</div>

                        <div >
                            {
                                isAdmin === "admin" &&
                                <button onClick={() => handleDelete(_id)} className="btn" style={{ backgroundColor: "darkred", color: "white" }}>  <i style={{ color: "white" }} class="fa fa-trash"></i>
                                    <span className="ps-1" style={{ color: "white" }}>DELETE</span></button>
                            }


                        </div>




                    </div>


                </div>

            </div>
        </div>
    );
};

export default AdminBlog;