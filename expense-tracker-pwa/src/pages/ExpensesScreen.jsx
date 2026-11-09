import { mockExpenses } from '../data/mockExpenses';

function ExpensesScreen({ onNewExpense }) {
  return (
    <div>
      <h2>Mis gastos</h2>
      <p>Hay {mockExpenses.length} gastos cargados</p>
      <button type="button" onClick={onNewExpense}>
        Agregar gasto
      </button>
    </div>
  );
}

export default ExpensesScreen;