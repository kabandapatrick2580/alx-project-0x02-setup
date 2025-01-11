import { PostProps } from '@/interfaces'
const PostCard : React.FC<PostProps> = ({ title, content, userId }) => {
    return (
        <div className="border border-gray-300 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2">{content}</p>
            <p className="mt-2">User ID: {userId}</p>
        </div>
    )
}
export default PostCard;