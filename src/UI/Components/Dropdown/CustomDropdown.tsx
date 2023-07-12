import React, { useState } from "react";

interface DropdownButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  children,
  onClick,
}) => {
  return <button onClick={onClick}>{children}</button>;
};

interface DropdownMenuProps {
  children: React.ReactNode;
  showMenu: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, showMenu }) => {
  return showMenu ? <div className="dropdown-menu">{children}</div> : null;
};

interface DropdownMenuItemProps {
  children: React.ReactNode;
  onItemClick: () => void;
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  children,
  onItemClick,
}) => {
  return (
    <div className="dropdown-menu-item" onClick={onItemClick}>
      {children}
    </div>
  );
};

const CustomDropdown: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleOptionClick = (option: string) => {
    // Handle option click logic
  };

  return (
    <div>
      <DropdownButton onClick={handleToggleMenu}>
        Toggle Dropdown
      </DropdownButton>
      <DropdownMenu showMenu={showMenu}>
        <DropdownMenuItem onItemClick={() => handleOptionClick("Option 1")}>
          Option 1
        </DropdownMenuItem>
        <DropdownMenuItem onItemClick={() => handleOptionClick("Option 2")}>
          Option 2
        </DropdownMenuItem>
        <DropdownMenuItem onItemClick={() => handleOptionClick("Option 3")}>
          Option 3
        </DropdownMenuItem>
      </DropdownMenu>
    </div>
  );
};

export default CustomDropdown;
