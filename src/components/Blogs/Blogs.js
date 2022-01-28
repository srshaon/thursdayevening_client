import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    // fetch data from database
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    // Set current page

    const lastPost = currentPage * pageSize;
    const firstPost = lastPost - pageSize;
    const currentBlogs = blogs.slice(firstPost, lastPost);
    const pageIndex = [];
    const totalPage = Math.ceil(blogs.length / pageSize) + 1;
    for (let i = 1; i < totalPage; i++) {
        pageIndex.push(i);
    }
    //   page functon page valu change

    const handleChangePageSize = (e) => {
        setPageSize(e.target.value);
    };
    const handlePaginate = (index) => {
        setCurrentPage(index);
    };


    return (
        <div>
            <div className='mt-3'>
                <h1 style={{ backgroundColor: "gray" }}>User's Blogs</h1>
            </div>
            <select onChange={handleChangePageSize}>
                <option value={5}>5</option>
                <option selected value={10}>
                    10
                </option>
                <option value={15}>15</option>
            </select>
            {
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-1">

                    {
                        currentBlogs.map(blog => <Blog key={blog._id} blog={blog}

                        >

                        </Blog>)
                    }
                </div>
            }
            <div className="blogs-pagination">
                <div className="pagination-buttons">
                    {pageIndex.map((index) => (
                        <button
                            className={index === currentPage && "active-page-btn"}
                            onClick={() => handlePaginate(index)}
                        >
                            {index}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Blogs;