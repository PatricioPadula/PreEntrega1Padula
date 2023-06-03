import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { Navbar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'

function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/productos/:categoryId' element={ <ItemListContainer/>}/>
          <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
          <Route path='/cart' element={ <Cart/> }/>
          <Route path='*' element={ 'esta ruta no esta definida' } />
        </Routes>
    
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
