import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  // ここでは仮のユーザー情報を使用しています。実際のアプリケーションでは、
  // この情報を認証システムやグローバルな状態管理から取得することになります。
  const user = {
    name: "John Doe",
    role: "Administrator",
    avatarInitial: "JD"
  };

  return (
    <aside className={`sidebar ${isOpen ? '' : 'closed'}`}>
      <div className="user-profile">
        <div className="user-avatar">
          {user.avatarInitial}
        </div>
        <div className="user-info">
          <span className="user-name">{user.name}</span>
          <span className="user-role">{user.role}</span>
        </div>
      </div>
      <nav>
        <ul className="sidebar-menu">
          <li>Dashboard</li>
          <li>Users</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;