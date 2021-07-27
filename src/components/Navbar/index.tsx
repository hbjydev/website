import * as React from 'react';

const Navbar = () => {
    return (
        <div className="h-8 flex justify-evenly items-center text-gray-900 bg-gray-200 dark:bg-gray-700 border-b border-gray-500 dark:border-gray-900">
            <a href="/" className="bg-gray-300 hover:bg-gray-400 dark:hover:bg-gray-500 dark:bg-gray-600 dark:text-white flex items-center justify-center w-full h-full">
                Hayden's Site
            </a>
            <a href="https://twitter.com/hbjydev" className="bg-gray-300 hover:bg-gray-400 dark:hover:bg-gray-500 dark:bg-gray-600 dark:text-white flex items-center justify-center w-full ml-1 h-full">
                Twitter
            </a>
            <a href="https://github.com/hbjydev" className="bg-gray-300 hover:bg-gray-400 dark:hover:bg-gray-500 dark:bg-gray-600 dark:text-white flex items-center justify-center w-full ml-1 h-full">
                GitHub
            </a>
            <a href="/contact" className="bg-gray-300 hover:bg-gray-400 dark:hover:bg-gray-500 dark:bg-gray-600 dark:text-white flex items-center justify-center w-full ml-1 h-full">
                Contact
            </a>
            <a href="https://github.com/hbjydev/website" className="bg-gray-300 hover:bg-gray-400 dark:hover:bg-gray-500 dark:bg-gray-600 dark:text-white flex items-center justify-center w-full ml-1 h-full">
                Source
            </a>
        </div>
    );
};

export default Navbar;
