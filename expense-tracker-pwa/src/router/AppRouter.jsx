import { Routes, Route, Link } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen';
import ExpensesScreen from '../pages/ExpensesScreen';
import ExpenseDetailScreen from '../pages/ExpenseDetailScreen';

function AppRouter({ onNewExpense }) {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen onNewExpense={onNewExpense} />} />
      <Route
        path="/expenses"
        element={<ExpensesScreen onNewExpense={onNewExpense} />}
      />
      <Route path="/expenses/:id" element={<ExpenseDetailScreen />} />
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