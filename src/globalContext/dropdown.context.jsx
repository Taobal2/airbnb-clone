import { createContext, useState } from "react";

export const DropdownContext = createContext({
  isDropDownOpen: false,
  setIsDropDownOpen: () => {},
});

export const DropdownProvider = ({ children }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const value = { isDropDownOpen, setIsDropDownOpen };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
