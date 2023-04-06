import React from 'react';

const ErrorPage = () => {
    return (
        <div className='w-full h-[calc(100vh-170px)] flex justify-center items-center'>
            <h2 className='text-5xl font-semibold'>404<span className='border-4 border-indigo-500 mx-4'></span>Page not found</h2>
        </div>
    );
};

export default ErrorPage;