import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Blog = ({blog, handleSpentTime}) => {
    // console.log(handleSpentTime)
    const {cover_url, authorImage, authorName, publish_date, readTime, blogTitle, hashTag } = blog;
    return (
        <div>
            <img className='w-full h-[450px] rounded-lg mb-6' src={cover_url} alt="" />
            <div className='flex justify-between items-center my-6'>
                <div className='flex items-center gap-5'>
                    <img className='ring-2 ring-gray-700 w-[60px] h-[60px] rounded-full' src={authorImage} alt="" />
                    <div>
                        <h3 className='font-bold text-2xl mb-1'>{authorName}</h3>
                        <p>{publish_date}</p>
                    </div>
                </div>
                <p>
                    {readTime} min red &nbsp;
                    <FontAwesomeIcon icon={faBookmark} />
                </p>
            </div>
            <h1 className='text-4xl w-3/4 font-bold my-5 leading-[50px]'>{blogTitle}</h1>
            <p className='my-4'>
                {
                    hashTag.map(tag => <span className='mr-3'>#{tag}</span>)
                }
            </p>
            <p onClick={() => handleSpentTime(readTime)} className='inline-block font-bold text-lg hover:text-indigo-700 cursor-pointer text-indigo-500 underline'>Mark as read</p>
            <hr className='my-8' />
        </div>
    );
};

export default Blog;