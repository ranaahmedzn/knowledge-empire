import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Sidemark from '../Sidemark/Sidemark';

const Home = () => {
    const [blogs, setBlogs] = useState([])
    const [spentTime, setSpentTime] = useState(0)

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    const handleSpentTime = (readTime) => {
        const previousReadTime = +readTime;
        const newReadTime = +spentTime;
        setSpentTime(previousReadTime + newReadTime)
    }

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='md:col-span-2'>
                {
                    blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleSpentTime={handleSpentTime}
                    ></Blog>)
                }
            </div>

            <div>
                <Sidemark spentTime={spentTime}></Sidemark>
            </div>
        </div>
    );
};

export default Home;