import * as React from "react"
import InnerLayout from "../components/InnerLayout";
import Layout from "../components/Layout";

type SidebarProps = {
    children: React.ReactChild | React.ReactChild[];
    href: string;
}

const SidebarItem = ({ children, href }: SidebarProps) => {
    return (
        <li>
            <a className="py-1 flex items-center px-2 border-b border-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 dark:border-gray-700" href={href}>{children}</a>
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

const rightColumn = (
    <ul>
        <SidebarItem href="#">Introduction</SidebarItem>
        <SidebarItem href="#">Rocky Linux</SidebarItem>
        <SidebarItem href="#">Downloading migrate2rocky</SidebarItem>
        <SidebarItem href="#">Migrating your system</SidebarItem>
    </ul>
);

const Index = () => {
    return (
        <Layout>
            <InnerLayout leftColumn={leftColumn} rightColumn={rightColumn}>
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
