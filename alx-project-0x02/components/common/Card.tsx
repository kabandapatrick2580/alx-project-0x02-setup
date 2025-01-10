import { CardProps } from "@/interfaces";
import React from "react";

const Card : React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="bg-white shadow-md p-4 rounded-md w-1/2">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p>{content}</p>
        </div>
    )
}
export default Card;