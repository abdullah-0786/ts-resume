import React, { ReactNode, createContext, useContext, useState } from 'react';

export interface NavbarVisibilityContextProps {
  navbarVisibility: boolean;
  setNavbarVisibility: (value: boolean) => void;
}
const NavbarVisibilityContext = createContext<NavbarVisibilityContextProps | undefined>(undefined);

interface Prop {
  children?: ReactNode;
}

export const NavbarVisibilityProvider = ({ children }: Prop) => {
  const [navbarVisibility, setNavbarVisibility] = useState(false);

  function toggleNavbarVisibility(value: boolean) {
    // setNavbarVisibility(prev => !prev);
    setNavbarVisibility(value);
  }

  return (
    <NavbarVisibilityContext.Provider
      value={{
        navbarVisibility,
        setNavbarVisibility: toggleNavbarVisibility,
      }}
    >
      {children}
    </NavbarVisibilityContext.Provider>
  );
};

export const useNavbarVisibility = () => useContext(NavbarVisibilityContext);
