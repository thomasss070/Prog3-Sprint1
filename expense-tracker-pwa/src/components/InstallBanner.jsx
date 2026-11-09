function InstallBanner({ onInstall }) {
  return (
    <div className="install-banner">
      <p>Install this app to use it offline.</p>
      <button onClick={onInstall}>Install</button>
    </div>
  );
}

export default InstallBanner;