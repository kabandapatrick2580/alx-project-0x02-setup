import { CardProps } from "@/interfaces";

const Card : React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="bg-white shadow-md p-4 rounded-md w-1/2 mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p>{content}</p>
        </div>
    )
}
export default Card;