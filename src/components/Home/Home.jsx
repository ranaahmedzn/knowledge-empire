import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Sidemark from "../Sidemark/Sidemark";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [spentTime, setSpentTime] = useState(0);
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleSpentTime = (readTime) => {
    const previousReadTime = +readTime;
    const newReadTime = +spentTime;
    setSpentTime(previousReadTime + newReadTime);
  };

  const handleBookmark = (blog) => {
    const exists = bookmark?.find((b) => b?.id === blog.id);
    if (!exists) {
      setBookmark([...bookmark, blog]);
      toast.success("Successfully Bookmarked !!", {
        position: toast.POSITION.TOP_LEFT,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "You Have Already Bookmarked This Blog!",
      });
    }
  };

  return (
    <div className="container px-3 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleSpentTime={handleSpentTime}
            handleBookmark={handleBookmark}
          ></Blog>
        ))}
      </div>

      <div>
        <Sidemark spentTime={spentTime} bookmark={bookmark}></Sidemark>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Home;
