import * as React from 'react';
import Navbar from '../Navbar';
import Helmet from 'react-helmet';
import '../../styles.css';

type LayoutProps = {
    children: React.ReactChild | React.ReactChild[];
    title?: string;
};

const Layout = ({ children, title }: LayoutProps) => {
    return (
        <>
            <Helmet defaultTitle="Hayden's Site" titleTemplate="%s - Hayden's Site">
                { title ? <title>{title}</title> : null }
            </Helmet>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                {children}
            </div>
        </>
    );
};

export default Layout;
