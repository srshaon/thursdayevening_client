import React, { useEffect, useState } from 'react';
import AdminBlog from './AdminBlog';

const AdminBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/adminBlogCollection')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    // Delete

    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/adminBlogCollections/${id}`;
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
    return (
        <div className="mt-3">
            <h1 style={{ backgroundColor: "gray" }}>Admin's Blog</h1>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-1">
                {
                    blogs.map(blog => <AdminBlog
                        key={blog._id} blog={blog}
                        handleDelete={handleDelete}
                    >

                    </AdminBlog>)
                }
            </div>
        </div>
    );
};

export default AdminBlogs;