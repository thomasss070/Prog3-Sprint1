import { Link } from 'react-router-dom';
import CategoryBadge from './CategoryBadge';
import '../styles/ExpenseCard.css';

function ExpenseCard({ expense }) {
  return (
    <li className="expense-card">
      <Link to={`/expenses/${expense.id}`} className="expense-card__link">
        <div className="expense-card__info">
          <span className="expense-card__description">
            {expense.description}
          </span>
          <CategoryBadge category={expense.category} />
        </div>
        <span className="expense-card__amount">
          ${expense.amount.toLocaleString('es-AR')}
        </span>
      </Link>
    </li>
  );
}

export default ExpenseCard;