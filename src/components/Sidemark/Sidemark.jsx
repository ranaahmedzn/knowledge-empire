import React from 'react';

const Sidemark = ({spentTime, bookmark}) => {
    return (
        <div className='sticky top-6'>
            <div className='text-center px-3 py-5 border-2 border-indigo-500 text-indigo-500 bg-indigo-100 rounded-lg mb-6'>
                <h3 className='font-bold text-2xl'>Spent time on read : {spentTime} min</h3>
            </div>

            <div className='bg-slate-200 rounded-lg min-h-[500px] p-6'>
                <h3 className='font-bold text-2xl mb-5'>Bookmarked Blogs :</h3>
                {
                    bookmark.map(blog => <BookmarkedBlog blog={blog} />)
                }
            </div>
        </div>
    );
};

const BookmarkedBlog = ({blog}) => {
    return (
        <div className='bg-white p-5 mb-4 rounded-lg'>
            <h3 className='font-bold'>{blog.blogTitle}</h3>
        </div>
    )
}

export default Sidemark;