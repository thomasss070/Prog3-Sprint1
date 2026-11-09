function ExpenseCard({ expense }) {
  return (
    <div className="card">
      <h3>{expense.description}</h3>
      <p>${expense.amount.toFixed(2)}</p>
      <CategoryBadge category={expense.category} />
    </div>
  );
}

export default ExpenseCard;