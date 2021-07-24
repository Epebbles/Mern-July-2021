import React from 'react';

const Tabs = (props) => {
    const { allTabs, currentTab, setCurrentTab } = props;
    const tabStyle = (index) => {
        if (index === currentTab) {
            return "selectedTab";
        } else {
            return "nonSelectedTab";
        }
    }

    const setSelectedTab = (index) => {
        setCurrentTab(index);
    }
    return (
        <div style={{margin:"auto", width:"10%", height:"10%", textAlign:"left"}}>
            { allTabs.map((item, index) => (
                <div className={ tabStyle(index) } onClick={(e) => setSelectedTab(index)}>
                { item.label }
                </div>
            ))
            }
        </div>

    )
}

export default Tabs;