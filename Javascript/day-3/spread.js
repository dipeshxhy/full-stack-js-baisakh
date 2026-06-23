const mobile = {
  name: 'iPhone 14 Pro Max',
  price: 1099,
  color: 'Deep Purple',
  storage: '256GB',
};

const product = products.map((p) => ({ ...p, ...mobile }));
products.map(p => (
  <h2>{ p?.name }</h2>
))