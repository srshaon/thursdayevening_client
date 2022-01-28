import React from 'react';
import useAuth from '../../hooks/useAuth';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ManageUserBlog = (props) => {
    let starNumber = 0;
    const { _id, status, date, location, review, cost, description, name, image, photoURL, rating } = props.blog
    const { user } = useAuth()
    const { handleConfirm } = props;
    const { handleDelete } = props;
    console.log(props.handleConfirm)
    return (
        <div >
            <div className=" mb-5 ms-3 me-3 mt-4 " >

                <div className="col h-100 ">
                    <div style={{ backgroundColor: "#C2D0C6" }} className="card singlecard ">


                        <img src={image} alt="" className=" w-100   " />


                        <div className="card-body text-center">
                            <div style={{ fontSize: 30, color: "white" }} className='card-text font-weight-bold '  >{name}
                                {
                                    photoURL &&
                                    <img style={{ width: 40 }} className=' rounded-circle ms-3' src={photoURL} alt="" />

                                }
                            </div>


                            <div className='card-text mt-3'  >
                                <span className='' style={{ fontSize: 20, color: "white" }}>Location:  {location}</span> </div>

                            <div className='card-text mt-3' >  <span style={{ fontSize: 20, color: "white" }}>Date: {date}</span> </div>
                            <div className='card-text mt-3' >
                                <span style={{ fontSize: 20, color: "white" }}>Total Cost:  ৳{cost} </span>
                            </div>
                            <div style={{ color: "white" }} className='card-text mt-3'>{description.slice(0, 200)}</div>




                            <div className="ms-2">
                                {[...Array(5)].map((star, i) => {
                                    starNumber += 1;
                                    return <label key={i}>
                                        <input style={{ display: 'none' }} type="radio" name="rating" id="" />

                                        <FaStar color={starNumber <= rating ? "yellow" : "grey"} />
                                    </label>
                                })}

                            </div>
                            <p >{review}</p>


                            <h6 className="card-text" > {status}</h6>
                        </div>
                        <div className="pb-5">
                            <div>
                                {
                                    status === "pending" &&
                                    < button onClick={() => handleConfirm(_id)} className="btn" style={{ backgroundColor: "indigo", color: "white" }} >Confirm</button>

                                }
                            </div>
                            <br />
                            <div className='d-flex justify-content-between ms-3 me-3'>
                                <div >
                                    <Link className="link" to={`blogDetails/${_id}`}><button type='button' className='p-2' style={{ borderRadius: "4px", backgroundColor: "blue", border: "none", color: "white" }}>
                                        Continue Reading
                                    </button>
                                    </Link>

                                </div>
                                <div  >

                                    <button onClick={() => handleDelete(_id)} className="btn" style={{ backgroundColor: "darkred", color: "white" }}>  <i style={{ color: "white" }} class="fa fa-trash"></i>
                                        <span className="ps-1" style={{ color: "white" }}>DELETE</span></button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div >
        </div>
    );
};

export default ManageUserBlog;