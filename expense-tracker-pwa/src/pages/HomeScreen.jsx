import { Link } from 'react-router-dom';
import { mockExpenses } from '../data/mockExpenses';
import '../styles/HomeScreen.css';

function HomeScreen({ onNewExpense }) {
  const total = mockExpenses.reduce((sum, item) => sum + item.amount, 0);
  const cantidad = mockExpenses.length;

  return (
    <div className="home">
      <header className="home__header">
        <h1 className="home__title">ExpenseTracker</h1>
        <p className="home__subtitle">¡Bienvenido/a!</p>
      </header>

      <main className="home__main">
        <p className="home__description">
          Esta aplicación te permitirá registrar y administrar tus gastos
          diarios de forma sencilla.
        </p>

        <section className="home__summary" aria-label="Resumen de gastos">
          <div className="home__summary-item">
            <span className="home__summary-label">Total registrado</span>
            <span className="home__summary-value">
              ${total.toLocaleString('es-AR')}
            </span>
          </div>
          <div className="home__summary-item">
            <span className="home__summary-label">Movimientos</span>
            <span className="home__summary-value">{cantidad}</span>
          </div>
        </section>

        <section className="home__actions" aria-label="Accesos rápidos">
    <button type="button" className="home__button" onClick={onNewExpense}>
  Registrar Nuevo Gasto
          </button>
          <Link to="/expenses" className="home__button home__button--secondary">
            Ver Listado Completo
          </Link>
        </section>
      </main>
    </div>
  );
}

export default HomeScreen;