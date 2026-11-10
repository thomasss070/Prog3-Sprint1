import { NavLink, Outlet } from 'react-router-dom';
import '../styles/MainLayout.css';

const TABS = [
  { to: '/', label: 'Inicio', icon: '🏠', end: true },
  { to: '/expenses', label: 'Gastos', icon: '💸', end: false },
  { to: '/settings', label: 'Ajustes', icon: '⚙️', end: false },
];

function MainLayout() {
  return (
    <div className="layout">
      <div className="layout__content">
        <Outlet />
      </div>

      <nav className="layout__nav" aria-label="Navegación principal">
        {TABS.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            className={({ isActive }) =>
              isActive ? 'layout__tab layout__tab--active' : 'layout__tab'
            }
          >
            <span className="layout__tab-icon" aria-hidden="true">
              {tab.icon}
            </span>
            <span>{tab.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default MainLayout;