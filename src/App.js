import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import itemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element ={<ItemListContainer />} />
          <Route path='/category/:categoruId' element ={<ItemListContainer />} />
          <Route path='/item/:itemId' element ={<itemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
