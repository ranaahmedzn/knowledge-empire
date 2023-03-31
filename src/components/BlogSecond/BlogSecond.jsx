import React, { useEffect, useState } from "react";

const BlogSecond = () => {
    const [blogInfo, setBlogInfo] = useState([])
    useEffect(() => {
        fetch('Q&A.json')
        .then(res => res.json())
        .then(data => setBlogInfo(data))
    }, [])

  return (
    <div className="container mx-auto my-6 px-3 md:px-0">
      <div className="text-center px-3 py-5 border-2 border-indigo-500 text-indigo-500 bg-indigo-100 rounded-lg mb-6">
        <h3 className="font-bold text-3xl">Welcome to my Blogs</h3>
      </div>
      {blogInfo.map((blog) => (
        <SingleBlog 
        key={blog.id}
        blog={blog}
        ></SingleBlog>
      ))}
    </div>
  );
};

const SingleBlog = ({blog}) => {
    const {id, question, answer} = blog;
    return (
        <div className="my-6">
            <h1 className="text-3xl font-bold my-5 py-2 leading-[50px] mb-0">
                <span className="text-rose-500 bg-rose-200 rounded-lg p-2">Question-{id}:</span> {question}
            </h1>
            <p>
                <span className="text-xl font-bold text-indigo-500">Ans: </span>
                {answer}
            </p>
        </div>
    )
}

export default BlogSecond;
