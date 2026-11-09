import usePWAInstall from '../hooks/usePWAInstall';

function InstallBanner() {
  const { canInstall, install, isIOS, isStandalone } = usePWAInstall();

  if (isStandalone) return null;

  if (canInstall) {
    return (
      <div className="install-banner">
        <p>Instalá ExpenseTracker en tu teléfono</p>
        <button onClick={install}>Instalar App</button>
      </div>
    );
  }

  if (isIOS) {
    return (
      <div className="install-banner">
        <p>Para instalar la app en tu iPhone: tocá el botón Compartir y elegí "Agregar a pantalla de inicio".</p>
      </div>
    );
  }

  return null;
}

export default InstallBanner;