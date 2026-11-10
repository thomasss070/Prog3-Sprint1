import { Routes, Route, Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomeScreen from '../pages/HomeScreen';
import ExpensesScreen from '../pages/ExpensesScreen';
import ExpenseDetailScreen from '../pages/ExpenseDetailScreen';
import SettingsScreen from '../pages/SettingsScreen';

function AppRouter({ onNewExpense }) {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomeScreen onNewExpense={onNewExpense} />} />
        <Route
          path="/expenses"
          element={<ExpensesScreen onNewExpense={onNewExpense} />}
        />
        <Route path="/expenses/:id" element={<ExpenseDetailScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
      </Route>

      <Route
        path="*"
        element={
          <main style={{ padding: 20 }}>
            <h1>Página no encontrada</h1>
            <Link to="/">Volver al inicio</Link>
          </main>
        }
      />
    </Routes>
  );
}

export default AppRouter;