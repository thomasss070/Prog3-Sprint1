import ExpenseCard from '../components/ExpenseCard';
import { mockExpenses } from '../data/mockExpenses';
import '../styles/ExpensesScreen.css';

function ExpensesScreen({ onNewExpense }) {
  const total = mockExpenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="expenses">
      <header className="expenses__header">
        <h1 className="expenses__title">Mis gastos</h1>
      </header>

      <main className="expenses__main">
        <ul className="expenses__list">
          {mockExpenses.map((expense) => (
            <ExpenseCard key={expense.id} expense={expense} />
          ))}
        </ul>

        <div className="expenses__total">
          <span>Total</span>
          <span>${total.toLocaleString('es-AR')}</span>
        </div>

        <button
          type="button"
          className="expenses__button"
          onClick={onNewExpense}
        >
          Agregar gasto
        </button>
      </main>
    </div>
  );
}

export default ExpensesScreen;