import React from 'react';
import './header.css';

interface HeaderBarProps {
  children?: React.ReactNode;
}

function HeaderBar({ children }: HeaderBarProps) {
  return <div className="header-bar">{children}</div>;
}

export default HeaderBar;
