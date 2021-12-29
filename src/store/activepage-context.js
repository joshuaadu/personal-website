import React, { useState } from "react";
const ActivePageContext = React.createContext({
  activeIndex: 0,
  selectPage: () => {}
});

export const ActivePageContextProvider = (props) => {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const selectActivePage = (activePage) => {
    setActivePageIndex(activePage);
  };

  return (
    <ActivePageContext.Provider
      value={{
        activeIndex: activePageIndex,
        selectPage: selectActivePage
      }}
    >
      {props.children}
    </ActivePageContext.Provider>
  );
};

export default ActivePageContext;
