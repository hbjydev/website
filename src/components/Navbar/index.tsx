import * as React from 'react';
import { Code, GitHub, Twitter } from 'react-feather';

const Navbar = () => {
    const [ scrolled, setScrolled ] = React.useState(false);

    if (typeof window !== 'undefined') {
        const onScroll = () => {
            if (window.scrollY > 0) setScrolled(true);
            else setScrolled(false);
        }
        React.useEffect(() => {
            document.addEventListener('scroll', onScroll);
            return () => {
                document.removeEventListener('scroll', onScroll);
            }
        }, [ window.scrollY ]);
    }

    const classes = `fixed w-full h-14 flex items-center text-gray-900 ${scrolled ? 'bg-white dark:bg-gray-800 shadow-md' : 'bg-gray-50 dark:bg-gray-900'} transition-all duration-300 ease-in-out`;

    return (
        <div className={classes}>
            <div className="flex justify-between max-w-screen-xl w-full mx-auto px-4">
                <div className="flex dark:text-white gap-6">
                    <a href="/" className="font-bold">
                        Hayden's Site
                    </a>
                    <a href="#">
                        Articles
                    </a>
                    <a href="#">
                        Guides
                    </a>
                </div>
                <div className="flex dark:text-white gap-6 items-center">
                    <a target="_blank" href="https://twitter.com/hbjydev">
                        <Twitter height="16" width="16" className="hover:text-blue-500 transition-colors duration-100 ease-in" />
                    </a>
                    <a target="_blank" href="https://github.com/hbjydev">
                        <GitHub height="16" width="16" className="hover:text-purple-500 transition-colors duration-100 ease-in" />
                    </a>
                    <a target="_blank" href="https://github.com/hbjydev/website">
                        <Code height="16" width="16" className="hover:text-green-500 transition-colors duration-100 ease-in" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
