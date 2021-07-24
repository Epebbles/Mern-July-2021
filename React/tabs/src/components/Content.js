import React from 'react';

const Content = (props) => {
    const { allTabs, currentTab } = props;

    return (
        <div className="Content">
            { allTabs[currentTab].content }
        </div>
    )
}

export default Content;