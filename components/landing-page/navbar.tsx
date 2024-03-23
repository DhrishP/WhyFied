import React from "react";
import NeoButton from "@/components/ui/neo-brutalist/button";
import { LogoutButton } from "../auth/logout-button";

const MenuButton = ({ children }:{children:React.ReactNode}) => (
  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300">
    {children}
  </button>
);

const Navbar = () => {
  const menuItems = ['Pricing', 'Samples', 'FAQ'];

  return (
    <header className="flex  justify-between items-center px-20 py-3 w-full text-lg font-semibold text-black whitespace-nowrap bg-orange-100 sm:flex-wrap sm:px-5 sm:max-w-full">
      <div className="self-start mt-4">LOGO</div>
      <nav className="flex space-x-6  justify-between sm:flex-wrap sm:max-w-full">
        <div className="flex space-x-4 text-md justify-between my-auto">
          {menuItems.map((item) => (
            <MenuButton key={item}>{item}</MenuButton>
          ))}
        </div>
        <NeoButton buttonText="Download" color="yellow" rounded="none" size="md" className="font-bold"/>
        <LogoutButton>
          logout
        </LogoutButton>
      </nav>
    </header>
  );
};

export default Navbar;