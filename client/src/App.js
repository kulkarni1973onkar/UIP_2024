import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Book from "./components/pages/Book";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import About from "./components/pages/About";
import Nav from "./components/pages/Nav";


const books = [
  {
      id:111,
      title:"Atomic Habits"
  },
  
  {
      id:222,
      title:"Think like monk"
  },
  
  {
      id:333,
      title:"The power of subconcious mind"
  },
  ]

function App() {
  return (
    <div className="App">  

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav />}>
            <Route index element={<About />}/>

            <Route path="books" element={<Book books={books}/>}/>
            <Route path="register" element={<Register />}/>
            <Route path="login" element={<Login />}/>
            
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
