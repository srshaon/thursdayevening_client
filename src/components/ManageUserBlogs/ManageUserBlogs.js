import React, { useEffect, useState } from 'react';
import ManageUserBlog from './ManageUserBlog';

const ManageUserBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])



    //Delete Blogs

    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/blogs/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Data Deleted Successfully");
                        const remaining = blogs.filter(blog => blog._id !== id);
                        setBlogs(remaining);
                    }
                })
        }


    }

    //Handle status

    const handleConfirm = (id) => {
        const proceed = window.confirm('are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/updateStatus/${id}`;
            fetch(url, {
                method: 'put'

            })
                .then(res => res.json())
                .then(data => {
                    console.log('first console', data)
                    if (data.modifiedCount > 0) {
                        alert("Approved Successfully");

                        fetch('http://localhost:5000/blogs')
                            .then(res => res.json())
                            .then(data => setBlogs(data))
                    }
                })
        }


    }
    return (
        <div style={{ backgroundColor: "silver" }}>
            {
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-1">

                    {
                        blogs.map(blog => <ManageUserBlog

                            key={blog._id}
                            blog={blog}
                            handleConfirm={handleConfirm}

                            handleDelete={handleDelete}


                        >
                        </ManageUserBlog>)
                    }
                </div>

            }
        </div>
    );
};

export default ManageUserBlogs;