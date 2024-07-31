import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ userId, post }) => {
  return (
    <div className="w-full bg-DEFAULT shadow-2xl rounded-lg mb-5 p-6 text-text">
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold text-2xl">{post.title}</p>
        <Link
          to={`/users/${userId}/posts/${post.id}`}
          className="border rounded-lg flex items-center font-semibold text-text py-[2px] lg:py-2 px-6 ml-1 mt-5 whitespace-nowrap"
        >
          <span className="text-2xl mr-3 mb-1">+</span> Edit Post
        </Link>
      </div>
      <p className="text-secondary">{post.body}</p>
    </div>
  );
};

export default PostCard;
