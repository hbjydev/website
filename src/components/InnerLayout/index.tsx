import * as React from 'react';

type InnerLayoutProps = {
    children?: React.ReactChild | React.ReactChild[];

    leftColumn?: React.ReactChild;
    rightColumn?: React.ReactChild;
};

const InnerLayout = ({ children, leftColumn, rightColumn }: InnerLayoutProps) => {
    return (
        <div className="grid lg:gap-1" id="innerlayout_container">
            { leftColumn ? (
                <div className="px-4 col-span-1 h-full border-b md:border-b-0 border-gray-400 dark:border-gray-700" id="layout_col_left">
                    {leftColumn}
                </div>
            ) : null }

            <div className="col-span-3 h-full px-4 md:px-4 lg:px-1 textformat" id="layout_col_middle">
                {children}
            </div>

            { rightColumn ? (
                <div className="px-4 text-right col-span-1 h-full border-b md:border-b-0 border-gray-400 dark:border-gray-700" id="layout_col_right">
                    {rightColumn}
                </div>
            ) : null }
        </div>
    );
};

export default InnerLayout;
