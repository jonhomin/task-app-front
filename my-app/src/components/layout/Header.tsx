import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // ここに実際のログアウト処理を実装します（例：トークンの削除など）
    console.log('Logout clicked');
    
    // ログイン画面へ遷移
    navigate('/auth/login');
    
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