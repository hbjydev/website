import * as React from 'react';
import Navbar from '../Navbar';
import '../../styles.css';

type LayoutProps = {
    children: React.ReactChild | React.ReactChild[];
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;
