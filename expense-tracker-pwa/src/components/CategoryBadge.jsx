function CategoryBadge({ category }) {
  return (
    <span className={`badge badge-${category.toLowerCase()}`}>
      {category}
    </span>
  );
}

export default CategoryBadge;   