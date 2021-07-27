import * as React from 'react';

type InnerLayoutProps = {
    children?: React.ReactChild | React.ReactChild[];

    leftColumn?: React.ReactChild;
    rightColumn?: React.ReactChild;
};

const InnerLayout = ({ children, leftColumn, rightColumn }: InnerLayoutProps) => {
    return (
        <div className="grid grid-rows-1 md:grid-rows-4 lg:grid-rows-5 lg:gap-1 flex-grow" id="innerlayout_container">
            { leftColumn ? (
                <div className="col-span-1 h-full bg-gray-200 dark:bg-gray-800 border-b md:border-b-0 md:border-r border-gray-400 dark:border-gray-700" id="layout_col_left">
                    {leftColumn}
                </div>
            ) : null }

            <main className="col-span-3 h-full p-8 textformat" id="layout_col_middle">
                {children}
            </main>

            { rightColumn ? (
                <div className="col-span-1 h-full bg-gray-200 dark:bg-gray-800 border-b md:border-b-0 md:border-l border-gray-400 dark:border-gray-700" id="layout_col_right">
                    {rightColumn}
                </div>
            ) : null }
        </div>
    );
};

export default InnerLayout;
