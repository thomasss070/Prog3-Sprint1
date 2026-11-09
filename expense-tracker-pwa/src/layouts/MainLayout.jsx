function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <header>
        <h1>Expense Tracker</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;