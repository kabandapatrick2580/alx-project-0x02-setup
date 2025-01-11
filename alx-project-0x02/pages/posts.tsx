import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <div>
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
  );
};

export const getStaticProps = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // Transform data to match PostProps (e.g., rename "body" to "content")
    const posts: PostProps[] = data.map((post: any) => ({
      id: post.id,
      title: post.title,
      content: post.body,
      userId: post.userId,
    }));

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error("Error fetching posts:", error);

    // Return empty posts on error
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default Posts;
