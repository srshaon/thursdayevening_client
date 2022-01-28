import './Home.css';

import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs'
import AdminBlogs from '../AdminBlogs/AdminBlogs';

const Home = () => {
    return (
        <div style={{ backgroundColor: "#C0C0C0" }}>
            <div>
                <Banner></Banner>
            </div>
            <div >
                <Blogs></Blogs>
            </div>
            <div className='ms-4'>
                <AdminBlogs></AdminBlogs>
            </div>
        </div>
    );
};

export default Home;