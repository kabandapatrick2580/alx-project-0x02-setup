import React from 'react'


const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">My Testing Application</h1>
        <nav>
            <ul className="flex space-x-4">
            <li>
                <a href="#" className="text-gray-800 hover:underline">Home</a>
            </li>
            <li>
                <a href="#" className="text-gray-800 hover:underline">About</a>
            </li>
            <li>
                <a href="#" className="text-gray-800 hover:underline">Contact</a>
            </li>
            </ul>
        </nav>
        </header>
    )
        }
    
    export default Header;