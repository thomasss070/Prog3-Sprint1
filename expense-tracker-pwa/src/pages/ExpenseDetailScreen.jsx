import { Link, useNavigate, useParams } from 'react-router-dom';
import CategoryBadge from '../components/CategoryBadge';
import { mockExpenses } from '../data/mockExpenses';
import '../styles/ExpenseDetailScreen.css';

function ExpenseDetailScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const expense = mockExpenses.find((item) => item.id === id);

  // Si se entró directo por la URL (o se recargó), no hay a dónde volver
  // dentro de la app: en ese caso se va al listado.
  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/expenses');
    }
  };

  if (!expense) {
    return (
      <div className="detail">
        <main className="detail__main">
          <h1 className="detail__title">Gasto no encontrado</h1>
          <p>No existe ningún gasto con el identificador "{id}".</p>
          <Link to="/expenses" className="detail__button">
            Ir al listado
          </Link>
        </main>
      </div>
    );
  }

  const fecha = new Date(`${expense.date}T00:00:00`).toLocaleDateString(
    'es-AR',
    { day: '2-digit', month: 'long', year: 'numeric' }
  );

  return (
    <div className="detail">
      <header className="detail__header">
        <button type="button" className="detail__back" onClick={handleBack}>
          ← Volver
        </button>
      </header>

      <main className="detail__main">
        <h1 className="detail__title">{expense.description}</h1>

        <dl className="detail__list">
          <div className="detail__row">
            <dt>Monto</dt>
            <dd>${expense.amount.toLocaleString('es-AR')}</dd>
          </div>
          <div className="detail__row">
            <dt>Categoría</dt>
            <dd>
              <CategoryBadge category={expense.category} />
            </dd>
          </div>
          <div className="detail__row">
            <dt>Fecha</dt>
            <dd>{fecha}</dd>
          </div>
          <div className="detail__row">
            <dt>Notas</dt>
            <dd>{expense.notes}</dd>
          </div>
        </dl>
      </main>
    </div>
  );
}

export default ExpenseDetailScreen;