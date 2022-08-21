import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/home'
import Cart  from './Components/cart'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
