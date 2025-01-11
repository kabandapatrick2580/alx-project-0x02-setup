import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import { useEffect, useState } from "react";

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        // Fetch data from the JSONPlaceholder API
        const fetchPosts = async () => {
          try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            console.log(data);
            // Transform data to match PostProps (e.g., rename "body" to "content")
            const transformedPosts = data.map((post: any) => ({
              id: post.id,
              title: post.title,
              content: post.body,
              userId: post.userId,
            }));
    
            setPosts(transformedPosts);
          } catch (error) {
            console.error("Error fetching posts:", error);
          }
        };
    
        fetchPosts();
      }, []);
        

    return (
        <>
        <Header />
            <div >
                <h1 className="text-6xl">Welcome to My Testing Application</h1>
                <h2 className="text-4xl mt-8">Posts</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <PostCard 
                            key={post.id}
                            title={post.title}
                            content={post.content}
                            userId={post.userId}
                            id={post.id}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Posts;

    