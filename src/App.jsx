import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
/* import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer' */
import { Navbar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={ <ItemListContainer/> } />
        <Route path='/productos/:categoryId' element={ <ItemListContainer/>}/>
        <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
        <Route path='*' element={ 'esta ruta no esta definida' } />
      </Routes>
  
    </BrowserRouter>
  )
}

export default App
