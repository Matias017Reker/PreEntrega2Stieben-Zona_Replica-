import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
  <div>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:idcategory" element={<ItemListContainer/>}/>
        <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App