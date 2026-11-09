import { useEffect, useState } from 'react';

function usePWAInstall() {
  const [installEvent, setInstallEvent] = useState(null);
  const [installed, setInstalled] = useState(false);

  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  useEffect(() => {
    const onBeforeInstall = (e) => {
      e.preventDefault();
      setInstallEvent(e);
    };
    const onInstalled = () => {
      setInstallEvent(null);
      setInstalled(true);
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstall);
    window.addEventListener('appinstalled', onInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  const install = async () => {
    if (!installEvent) return;
    installEvent.prompt();
    await installEvent.userChoice;
    setInstallEvent(null);
  };

  return {
    canInstall: installEvent !== null,
    install,
    isIOS,
    isStandalone: isStandalone || installed,
  };
}

export default usePWAInstall;