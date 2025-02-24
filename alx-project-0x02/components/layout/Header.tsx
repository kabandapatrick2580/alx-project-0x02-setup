import Link from 'next/link';
import React from 'react'

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">alx</h1>
        <nav>
            <ul className="flex space-x-4">
            <li>
                <Link href="/home">
                Home</Link>
            </li>
            <li>
                <Link href="/about">
                About</Link>
            </li>
            <li>
                <Link href="/posts">
                Posts</Link>
            </li>
            <li>
                <Link href="/users">
                Users</Link>
            </li>
            </ul>
        </nav>
        </header>
    )
        }
    
    export default Header;