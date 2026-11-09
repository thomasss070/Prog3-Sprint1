import { useState } from 'react';
import HomeScreen from './pages/HomeScreen';
import InstallBanner from './components/InstallBanner';
import NewExpenseModal from './components/NewExpenseModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <HomeScreen onNewExpense={() => setModalOpen(true)} />
      <InstallBanner />
      <NewExpenseModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default App;