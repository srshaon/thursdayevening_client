import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const BlogDetails = () => {
    const { Id } = useParams();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${Id}`)
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);
    return (
        <div style={{ backgroundColor: "silver" }}>
            <div>
                <img style={{ height: "500px" }} className="w-100" src="https://onestep4ward.com/wp-content/uploads/2011/08/Screenshot-2020-12-07-at-16.46.01-1024x678.png" alt="" />
            </div>
            <div className='mt-3'>
                <h2 style={{ color: "blue" }}> Memories of {blogs.location} Tour </h2>

            </div>
            <div className='row me-3 '>
                <div style={{ height: "300px" }} className='col-lg-5 border mb-4 mt-4 w-25 ms-5 singlecard'>
                    <div >
                        <span className='me-5' style={{ color: "white", fontSize: 20 }}>Location : {blogs.location} </span>

                        <hr />
                        <span className='ms-5' style={{ color: "white", fontSize: 20 }}>Date : {blogs.date} </span>

                        < hr />
                        <span className='me-4' style={{ color: "white", fontSize: 20 }}>Total Cost :৳ {blogs.cost}</span>

                    </div>
                </div>
                <div className='col-lg-7 content-border mb-4 mt-4 ms-5'>
                    <p style={{ color: "white" }}>{blogs.description}</p>
                </div>

            </div>

        </div>
    );
};

export default BlogDetails;