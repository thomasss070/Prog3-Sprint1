import { mockExpenses } from '../data/mockExpenses';

function ExpensesScreen() {
  return (
    <div>
      <h2>Mis gastos</h2>
      <p>Hay {mockExpenses.length} gastos cargados</p>
    </div>
  );
}

export default ExpensesScreen;