import { useState } from 'react';
import '../styles/SettingsScreen.css';

function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="settings">
      <header className="settings__header">
        <h1 className="settings__title">Ajustes</h1>
      </header>

      <main className="settings__main">
        <label className="settings__row" htmlFor="notifications">
          <span>Notificaciones</span>
          <input
            id="notifications"
            className="settings__switch"
            type="checkbox"
            role="switch"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
        </label>
      </main>
    </div>
  );
}

export default SettingsScreen;