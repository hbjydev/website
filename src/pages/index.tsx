import * as React from 'react';
import InnerLayout from '../components/InnerLayout';
import Layout from '../components/Layout';

type SidebarProps = {
    children: React.ReactChild | React.ReactChild[];
    href: string;
    right?: boolean;
}

const SidebarItem = ({ children, href, right = false }: SidebarProps) => {
    return (
        <li>
            <a className={`block py-2 border-gray-300 dark:border-gray-700 ${right ? 'text-right' : null}`} href={href}>{children}</a>
        </li>
    );
};

const leftColumn = (
    <ul>
        <SidebarItem href="#">CentOS Migration</SidebarItem>
        <SidebarItem href="#">FreeIPA Administration</SidebarItem>
        <SidebarItem href="#">Kubernetes</SidebarItem>
    </ul>
);

const Index = () => {
    return (
        <Layout title="Home">
            <div className="max-w-full px-4">
                <img src="https://images.unsplash.com/photo-1627466717798-1817bbc05bfe" className="max-w-screen-2xl mx-auto h-50 md:h-80 object-cover w-full mb-6 md:mb-12 rounded-md shadow-lg" />
            </div>
            <InnerLayout leftColumn={leftColumn}>
                <h1>Welcome to my site.</h1>

                <p>
                    This site contains all my notes and various blog articles
                    I've written over time. It should serve as my own personal
                    knowledge base as well as (hopefully) a useful resource for
                    others seeking knowledge in the subjects I cover here.
                </p>

                <p>
                    If you're here currently, you're early, though, as it has
                    no content yet!
                </p>

                <p>
                    Instead of stalking a dead website, why not look at its{' '}
                    <a target="_blank" href="https://github.com/hbjydev/website">code</a>?
                </p>
            </InnerLayout>
        </Layout>
    )
}

export default Index;
