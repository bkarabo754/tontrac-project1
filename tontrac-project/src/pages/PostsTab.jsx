import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserById, getUserPosts } from "@/api";
import PostCard from "./PostCard";

const PostsTab = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  const fetchPosts = useCallback(async () => {
    try {
      const postsData = await getUserPosts(userId);
      setPosts(postsData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, [userId]);

  const fetchUserData = useCallback(async () => {
    try {
      const userData = await getUserById(userId);
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      fetchPosts();
      fetchUserData();
    }
  }, [userId, fetchPosts, fetchUserData]);

  return (
    <div className="overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl mb-5 text-text font-bold">
          {`${user.name} - ${user.role} Posts`}
        </h1>
        <Link
          to={`/users/${userId}/posts/new`}
          className="border rounded-lg flex items-center font-semibold text-text py-[2px] lg:py-2 px-6 ml-1 mt-3 whitespace-nowrap"
        >
          <span className="text-2xl mr-3 mb-2">+</span> Add Post
        </Link>
      </div>
      <div
        className="overflow-y-auto custom custom-scrollbar"
        style={{ height: "calc(100% - 270px)" }}
      >
        {posts.map((post) => (
          <PostCard key={post.id} userId={userId} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsTab;
