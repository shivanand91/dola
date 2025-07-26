import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="h-[70px] w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-gradient-to-r from-indigo-700 to-violet-500 transition-all fixed top-0 ">

            <Link to="/" className='font-bold text-2xl text-white'>DOLA</Link>

            <ul class="text-white md:flex hidden items-center gap-10">
                <li><Link to="/" class="hover:text-white/70 transition">Home</Link></li>
                <li><Link to="/" class="hover:text-white/70 transition">Services</Link></li>
                <li><Link to="/" class="hover:text-white/70 transition">Pricing</Link></li>
                <li><Link to="/about" class="hover:text-white/70 transition">About</Link></li>
                <li><Link to="/contact" class="hover:text-white/70 transition">Contact</Link></li>
            </ul>

            <Link to="/signup" className="bg-white text-gray-700 hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full md:flex items-center justify-center">
                Get started
            </Link>

            <button aria-label="menu-btn" type="button" class="menu-btn inline-block md:hidden active:scale-90 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#fff">
                    <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
                </svg>
            </button>

            <div class="mobile-menu absolute top-[70px] left-0 w-full bg-gradient-to-r from-indigo-700 to-violet-500 p-6 hidden md:hidden">
                <ul class="flex flex-col space-y-4 text-white text-lg">
                    <li><a href="#" class="text-sm">Home</a></li>
                    <li><a href="#" class="text-sm">Services</a></li>
                    <li><a href="#" class="text-sm">Portfolio</a></li>
                    <li><a href="#" class="text-sm">Pricing</a></li>
                </ul>
                <button type="button" class="bg-white text-gray-700 mt-6 inline md:hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full">
                    Get started
                </button>
            </div>
        </nav>
    )
}

export default Navbar
