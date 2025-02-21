import Item from './components/Item.jsx';
import './App.css';
import Cart from './components/Cart.jsx';

function App() {
  return (
    <div className='App'>
      <Item name="MacBook Pro" price={100000}/>
      <Item name="Pendrive" price={4000}/>
      <Item name="Mobile" price={55000}/>
      <Cart />
    </div>
  );
}

export default App;
