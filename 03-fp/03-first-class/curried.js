// Pre-curried
{
  const multiply = (n, m) => n * m;
  console.log(multiply(2, 4)); // 8
}

// Curried
{
  const withMultiple = (n) => {
    return (m) => n * m;
  }
  console.log(withMultiple(2)(4)); // 8
}

// Curried with double arrow
{
  const withMultipleDoubleArrow = (n) => (m) => n * m;
  console.log(withMultipleDoubleArrow (2)(4)); // 8
}