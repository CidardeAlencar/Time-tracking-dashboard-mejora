import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

import '../style/App.css';

function App() {
  return (
    <section className='filterable-product-table'>
      <SearchBar/>
      <ProductTable/>
    </section>
    
  );
}

export default App;
