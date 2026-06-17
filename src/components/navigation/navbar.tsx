'use client'

import { useState, useEffect } from 'react';
import { HomeIcon, GamesIcon, ChatIcon, ProfileIcon, SearchIcon } from '../../app/icons/navBarIcon';
import './navbar.css';

// import Link from 'next/link';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 1);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed justify-end right-0 top-0 z-50 p-4 transition-all duration-300
                        ${scrolled ? 'bg-transparent' : 'bg-transparent'}
                        `
        }>
            <div className="menu">
                <a href="#home" className="link">
                    <span className="link-icon">
                        <HomeIcon />
                    </span>
                    <span className="link-title">Home</span>
                </a>
                <a href="#about" className="link">
                    <span className="link-icon">
                        <GamesIcon />
                    </span>
                    <span className="link-title">About</span>
                </a>
                <a href="#work" className="link">
                    <span className="link-icon">
                        <ChatIcon />
                    </span>
                    <span className="link-title">Projects</span>
                </a>

                <a href="#education" className="link">
                    <span className="link-icon">
                        <SearchIcon />
                    </span>
                    <span className="link-title">Education</span>
                </a>
                <a href="#footer" className="link">
                    <span className="link-icon">
                        <ProfileIcon />
                    </span>
                    <span className="link-title">Profile</span>
                </a>
            </div>

        </nav>
    );
};

export default Navbar;

