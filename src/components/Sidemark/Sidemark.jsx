import React from 'react';

const Sidemark = () => {
    return (
        <>
            <div className='text-center py-5 border-2 border-indigo-500 text-indigo-500 bg-indigo-100 rounded-lg mb-6'>
                <h3 className='font-bold text-2xl'>Spent time on read : {} min</h3>
            </div>

            <div className='bg-slate-200 rounded-lg min-h-[450px] p-6'>
                <h3 className='font-bold text-2xl'>Bookmarked Blogs :</h3>
            </div>
        </>
    );
};

export default Sidemark;