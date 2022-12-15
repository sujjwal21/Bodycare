import './App.css';
import Footer from './Components/Footer';
import MainFooter from './Components/MainFooter';
import Navbar from "./Components/Navbar"
import AllRoutes from './Pages/AllRoutes';
import Products from './Pages/Products';
import ProductTemplate from './Pages/ProductTemplet';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello Everyone</h1> */}
      {/* <Navbar/> */}
      <AllRoutes/>
      <MainFooter/>
      {/* <Footer/> */}
      {/* <Products/> */}
      {/* <ProductTemplate/> */}
    </div>
  );
}

export default App;
