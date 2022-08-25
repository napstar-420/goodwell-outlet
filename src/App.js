import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/home'
import Cart  from './Components/cart'
import { menProducts } from './data/menProducts'
import { feminineProducts } from './data/feminineProducts'
import { createContext, useMemo, useReducer } from 'react';
import { newArrival } from './data/newArrival'

export const StoreContext = createContext();

function App() {
  function cartReducer(state, action) {
    switch(action.type) {
      case "ADD_PRODUCT": {
        return ([...state, action.payload])
      }
      case "REMOVE_PRODUCT": {
        return (state.filter((product) => product.id !== action.payload))
      }
      case "INC_QUANTITY": {
        let newState = state;
        newState[action.payload].quantity = newState[action.payload].quantity+1;
        console.log(newState[action.payload])
        return ([...newState]);
      }
      case "DEC_QUANTITY": {
        let newState = state;
        newState[action.payload].quantity++;
        return ([...newState]);
      }
      default: {
        return state 
      }
    }
  }

  function reducer(state, action) {
    switch(action.type) {
      case "ADD_TO_CART": {
        let newState = [...state];
        newState[action.payload].addedToCart = true;
        return (newState)
      }
      case "REMOVE_FROM_CART": {
        let newState = [...state];
        newState.map((product) => {
          if(product.id === action.payload) {
            product.addedToCart = false;
          }
          return null;
        })
        return (newState)
      }
      default: return (state)
    }
  }
  
  const [mensProductState, menDispatch] = useReducer(reducer, [...menProducts])
  const [ladiesProduct, ladiesDispatch] = useReducer(reducer, [...feminineProducts])
  const [newArrivalState, newArrivalDispatch] = useReducer(reducer, [...newArrival])
  const [cartState , cartDispatch] = useReducer(cartReducer, []);
  const value = useMemo(() => ({ cartState, cartDispatch, ladiesProduct, ladiesDispatch, mensProductState, menDispatch, newArrivalState, newArrivalDispatch }), [cartState, ladiesProduct, mensProductState, newArrivalState] );
  return (
    <StoreContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />}/>
            <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </StoreContext.Provider>
  );
}

export default App;
