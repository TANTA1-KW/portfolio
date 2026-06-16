import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-50">
            <ul className="flex justify-center space-x-8">
                <li>
                    <Link href="#home" className="text-blue-600 hover:text-blue-800 text-lg font-medium">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="#about" className="text-green-600 hover:text-green-800 text-lg font-medium">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="#work" className="text-yellow-600 hover:text-yellow-800 text-lg font-medium">
                        Work
                    </Link>
                </li>
                <li>
                    <Link href="#education" className="text-purple-600 hover:text-purple-800 text-lg font-medium">
                        Education
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
