/** ------------------------------------------------------------ 
 * Examples
*/


/** ------------------------------------------------------------ 
 * In React
*/
function ProductList({products, category}) {
  return (
    <ul>
      {products
        .filter(p => p.category === category)
        .map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
    </ul>
  )
}

/** ------------------------------------------------------------ 
 * Quiz
*/
const products = [
  {
    id: 1,
    title: 'Scarlet Red T-Shirt',
    price: 299,
    gender: 'women'
  },
  {
    id: 2,
    title: 'Adidas Blue T-Shirt',
    price: 355,
    gender: 'men'
  },
  {
    id: 3,
    title: 'HRX Black T-Shirt',
    price: 425,
    gender: 'men'
  },
  {
    id: 4,
    title: 'White Half Sleeve T-Shirt',
    price: 425,
    gender: 'women'
  },
  {
    id: 5,
    title: 'Green T-Shirt',
    price: 425,
    gender: 'men'
  },
];

// Question: find out all black tshirt for men
// Question: find average price of T-Shirt for women
