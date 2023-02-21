import './App.css';
import NavBar from './components/NavBar'
import Show from './components/Show'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
   <NavBar/>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Show/>}/> 
      <Route path="/Create"/> 
      <Route path="/edit/:id"/> 
    </Routes>
   </BrowserRouter>
  
   </>
  );
}

export default App;

