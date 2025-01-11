import Card from "@/components/common/Card";
import React, { useState } from "react";
import PostModal from "@/components/common/PostModal";
import { Post } from "@/interfaces";
import Header from "@/components/layout/Header";
const Home: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddPost = (title: string, content: string) => {
        setPosts((prevPosts) => [...prevPosts, { title, content }]);
    };
    
        return (
            <>
            <Header />
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-6xl">Welcome to My Testing Application</h1>
                <button onClick={() => setIsModalOpen(true)} className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded">Create Post</button>
                <PostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmmit={handleAddPost} />
                <h2 className="text-4xl mt-8">Posts</h2>
                {posts.length > 0 ? (
                    posts.map((post, index) => (
                        <Card key={index} title={post.title} content={post.content} />
                    ))
                        
                ) : (
                    <p className="mt-4">No posts yet, Click to add a new one</p>
                )}
            </div>
            </>
        )
    
}
export default Home;