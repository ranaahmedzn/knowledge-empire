import React, { useEffect, useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 bg-red-500'>
            <div className='md:col-span-2 bg-blue-500'>
                This is Blog component
            </div>

            <div className='bg-green-500'>
                This is side component
            </div>
        </div>
    );
};

export default Home;