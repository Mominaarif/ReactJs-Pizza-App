import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import local files
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';

function Routes({ menuItems, cart, AddHandleCart, handCartRemove, HandleCartAdd }) {
  return (
    <div className="App">
      <Router>
        <Navbar  cart={cart} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu}>
            <Menu menuItems={menuItems}  
            cart={cart} 
            AddHandleCart={AddHandleCart}/>
          </Route>
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/cart" exact component={Cart}>
            <Cart cart={cart}
            handCartRemove={handCartRemove}
            HandleCartAdd={HandleCartAdd}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default Routes;
