import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Sidemark from '../Sidemark/Sidemark';

const Home = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='md:col-span-2'>
                {
                    blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    ></Blog>)
                }
            </div>

            <div>
                <Sidemark></Sidemark>
            </div>
        </div>
    );
};

export default Home;