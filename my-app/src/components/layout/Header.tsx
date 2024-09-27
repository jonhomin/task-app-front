import React, { useState } from 'react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // ログアウト処理をここに実装
    console.log('Logout clicked');
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="hamburger-icon" onClick={toggleSidebar}>
          ☰
        </div>
        <h1>Dashboard</h1>
      </div>
      <div className="header-right">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          Menu ▼
        </button>
        <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;